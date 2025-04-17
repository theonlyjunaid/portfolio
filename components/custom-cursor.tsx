"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CustomCursorProps {
  variant?: "default" | "link" | "button"
  text?: string
}

export default function CustomCursor({ variant = "default", text = "" }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("resize", checkDevice)
    }
  }, [])

  // Don't render cursor on mobile devices
  if (isMobile) return null

  const variants = {
    default: {
      height: 32,
      width: 32,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(147, 51, 234, 0)",
      mixBlendMode: "difference" as const,
      border: "1px solid rgba(147, 51, 234, 0.5)",
    },
    link: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "rgba(147, 51, 234, 0.2)",
      mixBlendMode: "normal" as const,
      border: "1px solid rgba(147, 51, 234, 0.5)",
    },
    button: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "rgba(147, 51, 234, 0.2)",
      mixBlendMode: "normal" as const,
      border: "1px solid rgba(147, 51, 234, 0.5)",
    },
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center text-xs font-medium"
        variants={variants}
        animate={variant}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        {text && variant !== "default" && <span className="text-primary opacity-80">{text}</span>}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 h-6 w-6 rounded-full bg-primary pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: variant !== "default" ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 35, mass: 0.1 }}
      />
    </>
  )
}
