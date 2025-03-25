"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function ThemeInitializer() {
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    // Force a theme update on initial load
    const currentTheme = theme || "system"
    setTheme(currentTheme)
  }, [setTheme, theme])

  return null
}

