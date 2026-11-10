'use client'

import { useEffect } from 'react'

export function ThemeInitializer() {
  useEffect(() => {
    const stored = window.localStorage.getItem('Velvetine Studio.-theme')
    if (stored) document.documentElement.classList.toggle('dark', stored === 'dark')
  }, [])

  return null
}
