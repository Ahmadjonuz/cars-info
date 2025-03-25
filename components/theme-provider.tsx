"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { ToastProvider } from "@/hooks/use-toast"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ToastProvider>{children}</ToastProvider>
    </NextThemesProvider>
  )
}

