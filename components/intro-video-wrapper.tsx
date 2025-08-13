"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { IntroVideo } from "./intro-video"

interface IntroVideoWrapperProps {
  children: React.ReactNode
}

export function IntroVideoWrapper({ children }: IntroVideoWrapperProps) {
  const [showIntro, setShowIntro] = useState(true) // Start with intro visible
  const [shouldShowIntro, setShouldShowIntro] = useState(true) // Start with intro enabled

  useEffect(() => {
    const win = typeof window !== "undefined" ? window : undefined
    if (!win) return

    const params = new URLSearchParams(win.location.search)
    const forceIntro = params.get("intro") === "1"
    const hasPlayed = localStorage.getItem("petroNova_introPlayed")

    // Always show intro on first visit, or when forced
    if (forceIntro || !hasPlayed) {
      setShouldShowIntro(true)
      setShowIntro(true)
    } else {
      // If intro has been played before and not forced, skip it
      setShouldShowIntro(false)
      setShowIntro(false)
    }
  }, [])

  const handleVideoComplete = () => {
    try {
      localStorage.setItem("petroNova_introPlayed", "true")
    } catch {}
    setShowIntro(false)
  }

  // Prevent body scroll while intro is visible
  useEffect(() => {
    if (showIntro) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [showIntro])

  // Show intro video first, then children after completion
  if (shouldShowIntro && showIntro) {
    return <IntroVideo videoSrc="/videos/intro.mp4" onComplete={handleVideoComplete} />
  }

  // Only show children after intro is complete or skipped
  return <>{children}</>
}
