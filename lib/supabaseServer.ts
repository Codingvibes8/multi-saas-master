import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

export const getServerUser = async () => {
    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getUser()
    return data.user
}
