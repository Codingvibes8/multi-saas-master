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
    const { prompt, amount = 1, resolution = "512x512" } = body

    if (!user?.id) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 })
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 })
    }

    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 })
    }

    const freeTrial = await checkApiLimit()
    const isPro = await checkSubscription()

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial limit reached", { status: 403 })
    }

    const response = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      {
        input: {
          prompt,
          width: Number.parseInt(resolution.split("x")[0]),
          height: Number.parseInt(resolution.split("x")[1]),
          num_outputs: Number.parseInt(amount),
        },
      },
    )

    if (!isPro) {
      await incrementApiLimit()
    }

    return NextResponse.json(response)
  } catch (error) {
    console.log("[IMAGE_ERROR]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

