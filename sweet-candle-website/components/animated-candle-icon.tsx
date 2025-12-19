"use client"

import { motion } from "framer-motion"

interface AnimatedCandleIconProps {
  className?: string
}

export function AnimatedCandleIcon({ className = "" }: AnimatedCandleIconProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Candle body */}
      <motion.div
        className="relative h-12 w-8 rounded-t-sm bg-gradient-to-b from-pink-100 to-pink-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Wick */}
        <div className="absolute left-1/2 top-0 h-2 w-0.5 -translate-x-1/2 -translate-y-full bg-gray-700" />

        {/* Flame */}
        <motion.div
          className="absolute left-1/2 -top-6 -translate-x-1/2"
          animate={{
            scale: [1, 1.1, 0.95, 1.05, 1],
            rotate: [-2, 2, -1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div
            className="h-4 w-3 rounded-full bg-gradient-to-t from-orange-400 via-yellow-300 to-yellow-100"
            style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
          />
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute -top-8 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-yellow-200/30 blur-md"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  )
}
