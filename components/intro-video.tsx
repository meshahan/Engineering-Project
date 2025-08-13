"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface IntroVideoProps {
  videoSrc: string
  onComplete: () => void
}

export function IntroVideo({ videoSrc, onComplete }: IntroVideoProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      setIsPlaying(false)
      setTimeout(onComplete, 1000)
    }

    const handleCanPlay = () => {
      video.play().catch(console.error)
    }

    const handleError = () => {
      console.error("Video failed to load")
      setTimeout(onComplete, 500)
    }

    video.addEventListener("ended", handleEnded)
    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("ended", handleEnded)
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("error", handleError)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          {/* Skip button */}
          <button
            aria-label="Skip intro"
            onClick={() => {
              setIsPlaying(false)
              setTimeout(onComplete, 300)
            }}
            className="absolute right-4 top-4 z-[60] rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            Skip Intro
          </button>

          <div className="w-full px-4 md:px-8">
            <AspectRatio
              ratio={16 / 9}
              className="mx-auto w-full max-w-[800px] rounded-xl overflow-hidden shadow-2xl bg-black"
            >
              <video
                ref={videoRef}
                className="h-full w-full object-contain bg-black"
                autoPlay
                playsInline
                preload="metadata"
                aria-label="PetroNova Engineering & Construction introduction video"
              >
                {/* Primary source (as provided) */}
                <source src={videoSrc} type="video/mp4" />
                {/* Fallback: same name without duplicate extension */}
                <source src="/videos/intro.mp4" type="video/mp4" />
                {/* Optional WebM fallback if added later */}
                <source src="/videos/intro.webm" type="video/webm" />
                <track
                  kind="captions"
                  src="/captions/intro-video.vtt"
                  srcLang="en"
                  label="English"
                  default
                />
                Your browser does not support the video tag.
              </video>
            </AspectRatio>
          </div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
