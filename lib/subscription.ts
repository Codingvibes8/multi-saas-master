import { getServerUser } from "@/lib/supabaseServer"
import supabaseAdmin from "@/lib/supabaseAdmin"

const DAY_IN_MS = 86_400_000

export const checkSubscription = async () => {
    const user = await getServerUser()

    if (!user?.id) return false

    const { data: userSubscription, error } = await supabaseAdmin
        .from("user_subscriptions")
        .select("stripe_subscription_id, stripe_current_period_end, stripe_price_id")
        .eq("user_id", user.id)
        .maybeSingle()

    if (error) return false
    if (!userSubscription) return false

    const isValid =
        userSubscription.stripe_price_id && new Date(userSubscription.stripe_current_period_end).getTime() + DAY_IN_MS > Date.now()

    return !!isValid
}

