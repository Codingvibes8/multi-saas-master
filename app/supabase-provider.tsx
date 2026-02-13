"use client"

import { useState } from "react"
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"

export default function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [supabaseClient] = useState(() => {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return null
    }
    return createPagesBrowserClient()
  })

  if (!supabaseClient) {
    return <>{children}</>
  }

  return <SessionContextProvider supabaseClient={supabaseClient}>{children}</SessionContextProvider>
}
