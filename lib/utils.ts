import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const absoluteUrl = (path = "/") => {
  const base = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || ""
  return `${base}${path}`
}
