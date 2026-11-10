'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem('Velvetine Studio.-theme')
    const shouldUseDark = stored === 'dark'
    if (stored) document.documentElement.classList.toggle('dark', shouldUseDark)
    const updateIcon = window.setTimeout(() => setDark(shouldUseDark), 0)
    return () => window.clearTimeout(updateIcon)
  }, [])

  function toggleTheme() {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    window.localStorage.setItem('Velvetine Studio.-theme', next ? 'dark' : 'light')
    setDark(next)
  }

  return (
    <Button
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={dark}
      variant="ghost"
      size="icon"
      type="button"
      onClick={toggleTheme}
    >
      {dark ? <Sun /> : <Moon />}
    </Button>
  )
}
