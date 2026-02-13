import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"
import { NextResponse } from "next/server"

import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"
import { getServerUser } from "@/lib/supabaseServer"

export async function POST(req: Request) {
  try {
    const user = await getServerUser()
    const body = await req.json()
    const { messages } = body

    if (!user?.id) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 })
    }

    const freeTrial = await checkApiLimit()
    const isPro = await checkSubscription()

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial limit reached", { status: 403 })
    }

    const result = streamText({
      model: openai("gpt-4o"),
      system:
        "You are a code generator. You must only respond with code and explanations using markdown format. Use code comments for explanations when possible.",
      messages,
    })

    if (!isPro) {
      await incrementApiLimit()
    }

    return result.toDataStreamResponse()
  } catch (error) {
    console.log("[CODE_ERROR]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

