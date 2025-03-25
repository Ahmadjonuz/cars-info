"use client"

import * as React from "react"
import { useState, createContext, useContext } from "react"

type ToastVariant = "default" | "destructive"

interface Toast {
  title: string
  description?: string
  variant?: ToastVariant
}

interface ToastContextType {
  currentToast: Toast | null
  toast: (toast: Toast) => void
  dismissToast: () => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [currentToast, setCurrentToast] = useState<Toast | null>(null)

  const toast = (toast: Toast) => {
    setCurrentToast(toast)

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      setCurrentToast(null)
    }, 3000)
  }

  return (
    <ToastContext.Provider value={{ currentToast, toast, dismissToast: () => setCurrentToast(null) }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)

  if (context === undefined) {
    // Create a standalone version for components that are not within a ToastProvider
    return {
      currentToast: null,
      toast: (toast: Toast) => {
        console.warn("useToast was used outside of ToastProvider")
        // You could implement a fallback here if needed
      },
      dismissToast: () => {},
    }
  }

  return context
} 