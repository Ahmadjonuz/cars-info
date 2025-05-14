"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Fade up animation for page containers
export function FadeUpContainer({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger children animation
export function StaggerContainer({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Fade in animation for individual items
export function FadeInItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Scale animation for cards and interactive elements
export function ScaleItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn("transition-shadow duration-300 hover:shadow-lg", className)}
    >
      {children}
    </motion.div>
  )
}

// Slide in from side animation
export function SlideInFromSide({
  children,
  className,
  direction = "left",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  direction?: "left" | "right"
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Gradient text animation
export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.span
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      className={cn(
        "bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent bg-300%",
        className
      )}
    >
      {children}
    </motion.span>
  )
} 