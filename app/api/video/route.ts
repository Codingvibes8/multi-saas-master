import { NextResponse } from "next/server"
import { Replicate } from "replicate"

import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"
import { getServerUser } from "@/lib/supabaseServer"

export async function POST(req: Request) {
  try {
    const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN! })
    const user = await getServerUser()
    const body = await req.json()
    const { prompt } = body

    if (!user?.id) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 })
    }

    const freeTrial = await checkApiLimit()
    const isPro = await checkSubscription()

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial limit reached", { status: 403 })
    }

    const response = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt,
        },
      },
    )

    if (!isPro) {
      await incrementApiLimit()
    }

    return NextResponse.json(response)
  } catch (error) {
    console.log("[VIDEO_ERROR]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

