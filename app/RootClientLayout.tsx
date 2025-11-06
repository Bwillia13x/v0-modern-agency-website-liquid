"use client"

import type React from "react"
import Plasma from "@/components/plasma"
import { useEffect } from "react"

export default function RootClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Suppress ResizeObserver loop errors (benign browser warning)
    const handleError = (e: ErrorEvent) => {
      if (e.message && e.message.includes("ResizeObserver loop")) {
        e.stopImmediatePropagation()
        e.preventDefault()
        return false
      }
    }

    // Also catch unhandled promise rejections
    const handleRejection = (e: PromiseRejectionEvent) => {
      if (e.reason && e.reason.message && e.reason.message.includes("ResizeObserver loop")) {
        e.stopImmediatePropagation()
        e.preventDefault()
        return false
      }
    }

    // Suppress console errors for ResizeObserver (they're benign)
    const originalError = console.error
    console.error = (...args: any[]) => {
      const message = args[0]?.toString() || ""
      if (message.includes("ResizeObserver loop")) {
        return // Suppress this specific error
      }
      originalError.apply(console, args)
    }

    window.addEventListener("error", handleError)
    window.addEventListener("unhandledrejection", handleRejection)

    return () => {
      window.removeEventListener("error", handleError)
      window.removeEventListener("unhandledrejection", handleRejection)
      console.error = originalError
    }
  }, [])

  return (
    <>
      <div className="fixed inset-0 z-0 bg-black">
        <Plasma color="#8b5cf6" speed={0.8} direction="forward" scale={1.5} opacity={0.4} mouseInteractive={true} />
      </div>
      <div className="relative z-10">{children}</div>
    </>
  )
}
