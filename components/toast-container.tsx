"use client"

import { useToast } from "@/hooks/use-toast"
import { Toast, ToastTitle, ToastDescription, ToastClose, ToastViewport } from "@/components/ui/toast"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ToastContainer() {
  const { currentToast, dismissToast } = useToast()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (currentToast) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [currentToast])

  if (!currentToast) return null

  return (
    <ToastViewport>
      <Toast
        className={cn(
          "transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0",
          currentToast.variant === "destructive" && "border-destructive bg-destructive text-destructive-foreground"
        )}
      >
        <div className="flex flex-col gap-1">
          <ToastTitle>{currentToast.title}</ToastTitle>
          {currentToast.description && <ToastDescription>{currentToast.description}</ToastDescription>}
        </div>
        <ToastClose onClick={dismissToast} />
      </Toast>
    </ToastViewport>
  )
}

