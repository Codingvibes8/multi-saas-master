"use client"

import { createBrowserClient } from "@supabase/ssr"

export default function SupabaseProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function createSupabaseBrowserClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
