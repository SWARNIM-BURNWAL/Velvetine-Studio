import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-muted/25 border-t border-border/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span className="font-medium tracking-[0.14em] text-foreground">
          Velvetine Studio.<span className="text-primary">.</span>
        </span>
        <span>Objects for slower living.</span>
        <span>© 2026 Velvetine Studio. Objects</span>
      </div>
    </footer>
  )
}
