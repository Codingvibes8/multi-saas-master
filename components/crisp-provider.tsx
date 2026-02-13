"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispProvider = () => {
  useEffect(() => {
    Crisp.configure("CRISP_WEBSITE_ID")
  }, [])

  return null
}

