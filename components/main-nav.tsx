import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  const items = [
    {
      href: "/",
      text: "Bosh sahifa"
    },
    {
      href: "/cars",
      text: "Avtomobillar"
    },
    {
      href: "/favorites",
      text: "Sevimlilar"
    },
    {
      href: "/compare",
      text: "Taqqoslash"
    },
    {
      href: "/search",
      text: "Qidirish"
    }
  ]

  return (
    <div className="mr-4 hidden md:flex">
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === item.href ? "text-foreground" : "text-foreground/60"
            )}
          >
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  )
} 