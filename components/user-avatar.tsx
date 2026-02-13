"use client"

import { useUser } from "@supabase/auth-helpers-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const UserAvatar = () => {
  const { user } = useUser()

  type SupabaseUser = {
    user_metadata?: { avatar_url?: string; full_name?: string }
    email?: string
  }

  const u = user as unknown as SupabaseUser
  const img = u.user_metadata?.avatar_url || undefined
  const fullName = u.user_metadata?.full_name || u.email || ""

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={img} />
      <AvatarFallback>
        {fullName?.charAt(0)?.toUpperCase()}
      </AvatarFallback>
    </Avatar>
  )
}

