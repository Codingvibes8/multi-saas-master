"use client"

import { toast as sonnerToast } from "sonner"

type ToastOptions = {
  variant?: "destructive" | "default"
  title?: string
  description?: string
}

export const toast = ({ variant, title, description }: ToastOptions) => {
  if (variant === "destructive") {
    sonnerToast.error(description || title || "Error")
  } else {
    sonnerToast((description || title) ?? "Done")
  }
}

export default toast
