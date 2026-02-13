import React from "react"
import SupabaseProvider from "@/app/supabase-provider"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import { ModalProvider } from "@/components/modal-provider"
//import { CrispProvider } from "@/components/crisp-provider"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Studio | All-in-one AI Platform",
  description: "AI SaaS platform with conversation, code, image, music, and video generation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SupabaseProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {/* <CrispProvider /> */}
            <ModalProvider />
            {children}
            <Toaster />
          </ThemeProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
