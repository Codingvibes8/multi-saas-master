import { getServerUser } from "@/lib/supabaseServer"
import supabaseAdmin from "@/lib/supabaseAdmin"
import { MAX_FREE_COUNTS } from "@/constants"

export const incrementApiLimit = async () => {
    const user = await getServerUser()

    if (!user?.id) return

    const { data: existing, error } = await supabaseAdmin
        .from("user_api_limits")
        .select("count")
        .eq("user_id", user.id)
        .maybeSingle()

    if (error) return

    if (existing) {
        await supabaseAdmin
            .from("user_api_limits")
            .update({ count: existing.count + 1 })
            .eq("user_id", user.id)
    } else {
        await supabaseAdmin.from("user_api_limits").insert({ user_id: user.id, count: 1 })
    }
}

export const checkApiLimit = async () => {
    const user = await getServerUser()

    if (!user?.id) return false

    const { data: userApiLimit } = await supabaseAdmin
        .from("user_api_limits")
        .select("count")
        .eq("user_id", user.id)
        .maybeSingle()

    if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) return true

    return false
}

export const getApiLimitCount = async () => {
    const user = await getServerUser()

    if (!user?.id) return 0

    const { data: userApiLimit } = await supabaseAdmin
        .from("user_api_limits")
        .select("count")
        .eq("user_id", user.id)
        .maybeSingle()

    if (!userApiLimit) return 0

    return userApiLimit.count
}

