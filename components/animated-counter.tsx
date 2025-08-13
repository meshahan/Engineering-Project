"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ value, duration = 2000, className = "" }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView || hasAnimated) return

    setHasAnimated(true)

    // Extract number and suffix from value (e.g., "500+" -> number: 500, suffix: "+")
    const match = value.match(/^(\$?)(\d+(?:\.\d+)?)([+%]?|[BMK]?\+?)(.*)$/)
    if (!match) {
      setDisplayValue(value)
      return
    }

    const [, prefix, numberStr, suffix, remaining] = match
    const targetNumber = Number.parseFloat(numberStr)

    // Handle special cases for large numbers
    let multiplier = 1
    if (suffix.includes("B")) multiplier = 1000000000
    else if (suffix.includes("M")) multiplier = 1000000
    else if (suffix.includes("K")) multiplier = 1000

    const actualTarget = targetNumber * multiplier
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentNumber = actualTarget * easeOutQuart

      // Format the current number back to display format
      let displayNumber: string
      if (multiplier > 1) {
        const scaledNumber = currentNumber / multiplier
        displayNumber = scaledNumber.toFixed(scaledNumber < 10 ? 1 : 0)
      } else {
        displayNumber = Math.floor(currentNumber).toString()
      }

      // Handle decimal places for percentages
      if (suffix.includes("%") && targetNumber % 1 !== 0) {
        const scaledCurrent = currentNumber
        displayNumber = scaledCurrent.toFixed(1)
      }

      setDisplayValue(`${prefix}${displayNumber}${suffix}${remaining}`)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    // Start animation after a small delay
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate)
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [isInView, value, duration, hasAnimated])

  return (
    <div ref={ref} className={className}>
      {displayValue}
    </div>
  )
}
