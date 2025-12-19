"use client"

import { motion } from "framer-motion"

interface CandleFlameProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function CandleFlame({ size = "md", className = "" }: CandleFlameProps) {
  const sizes = {
    sm: { width: 16, height: 24 },
    md: { width: 24, height: 36 },
    lg: { width: 32, height: 48 },
  }

  const { width, height } = sizes[size]

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-t from-orange-400/30 to-yellow-200/20 blur-md"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Main flame */}
      <motion.svg
        viewBox="0 0 24 36"
        fill="none"
        className="absolute inset-0 h-full w-full"
        animate={{
          scaleY: [1, 1.1, 0.95, 1.05, 1],
          scaleX: [1, 0.95, 1.05, 0.98, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <defs>
          <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="40%" stopColor="#fb923c" />
            <stop offset="70%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#fef3c7" />
          </linearGradient>
        </defs>
        <path d="M12 2C12 2 6 12 6 20C6 26 9 32 12 34C15 32 18 26 18 20C18 12 12 2 12 2Z" fill="url(#flameGradient)" />
        {/* Inner bright core */}
        <motion.ellipse
          cx="12"
          cy="24"
          rx="3"
          ry="6"
          fill="#fef9c3"
          animate={{
            ry: [6, 7, 5, 6],
            opacity: [0.9, 1, 0.85, 0.9],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  )
}
