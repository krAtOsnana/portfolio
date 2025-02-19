"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isAnimating, setIsAnimating] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    setIsAnimating(true)
  }

  React.useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 100)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  if (!mounted) {
    return <Button variant="outline" size="icon" />
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="relative overflow-hidden">
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
          isAnimating ? "translate-y-full" : "translate-y-0"
        }`}
      >
        {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
          isAnimating ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {theme === "dark" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

