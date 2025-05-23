import React from "react"
import { motion, HTMLMotionProps } from "motion/react"

type AnimatedButtonProps = HTMLMotionProps<"button"> & {
  size?: "default" | "sm" | "lg"
  variant?: "primary" | "secondary"
}

const AnimatedButton = ({
  children,
  className = "",
  size = "default",
  variant = "primary",
  ...props
}: AnimatedButtonProps) => {
  return (
    <motion.button
      type="button"
      className={`relative group overflow-hidden rounded-lg font-medium inline-flex items-center justify-center transition-all
        ${
          size === "sm"
            ? "px-3 py-1.5 text-sm"
            : size === "lg"
            ? "px-6 py-3 text-lg"
            : "px-4 py-2 text-base"
        }
        ${
          variant === "primary"
            ? "text-white shadow-lg"
            : "bg-transparent border border-gray-700 text-gray-200 hover:bg-gray-800"
        }
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {variant === "primary" && (
        <>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 pointer-events-none" />
          <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-700 pointer-events-none" />
          <span className="absolute -inset-px opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-400 to-indigo-500 blur-md rounded-lg pointer-events-none" />
        </>
      )}
      <span className="relative flex items-center justify-center gap-2 z-10">{children as React.ReactNode}</span>
    </motion.button>
  )
}

export default AnimatedButton
