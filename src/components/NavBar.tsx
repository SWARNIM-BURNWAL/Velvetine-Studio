'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Box, Menu, ShoppingBag, UserRound, X } from 'lucide-react'

import { ThemeToggle } from '@/components/ThemeToggle'
import { Button, buttonVariants } from '@/components/ui/button'

const links = [
  { label: 'Shop the collection', href: '/Shop' },
  { label: 'Our story', href: '#story' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [signInOpen, setSignInOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen && !signInOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setSignInOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen, signInOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70">
      <div className="bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full  items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="Velvetine Studio. Objects home"
          >
            <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform group-hover:-rotate-6">
              <Box className="size-4" strokeWidth={2} />
            </span>
            <span className="text-base font-semibold tracking-[0.14em]">
              Velvetine Studio<span className="text-primary">.</span>
            </span>
          </Link>

          <div className="hidden md:block">
            <button
              type="button"
              className={`${buttonVariants({ variant: 'outline' })} gap-2`}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span>Menu</span>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
          <div className="block md:hidden">
            <button
              type="button"
              className={`${buttonVariants({ variant: 'ghost', size: 'icon' })} size-11 touch-manipulation`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="pointer-events-auto fixed inset-x-0 bottom-0 top-16 z-[60] bg-foreground/20 backdrop-blur-[2px]"
          onClick={closeMenu}
        >
          <div
            id="site-menu"
            role="dialog"
            aria-label="Site menu"
            className="relative z-[61] ml-auto h-[calc(100svh-4rem)] max-h-[calc(100svh-4rem)] w-full max-w-md touch-pan-y overflow-y-auto border-l border-border bg-background p-6 shadow-2xl sm:p-8 md:h-auto md:max-h-[calc(100svh-4rem)] md:rounded-bl-2xl"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Explore Velvetine Studio.
              </p>
              <span className="font-mono text-xs text-muted-foreground">MENU / 01</span>
            </div>

            <nav className="flex flex-col divide-y divide-border" aria-label="Menu navigation">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between py-5 text-xl font-medium tracking-tight transition-colors hover:text-primary"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-8 grid gap-3">
              <Button
                size="lg"
                className="w-full justify-between"
                onClick={() => {
                  closeMenu()
                  setSignInOpen(true)
                }}
              >
                <span className="flex items-center gap-2">
                  <UserRound />
                  Sign in
                </span>
                <span aria-hidden="true">↗</span>
              </Button>
              <Button
                nativeButton={false}
                size="lg"
                variant="outline"
                className="w-full justify-between"
                render={<Link href="#bag" onClick={closeMenu} />}
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag />
                  Shopping bag
                </span>
                <span className="font-mono text-xs">0 items</span>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
              <span className="text-sm text-muted-foreground">Appearance</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}

      {signInOpen && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-foreground/30 p-5 backdrop-blur-sm"
          onClick={() => setSignInOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sign-in-title"
            className="w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Welcome back
                </p>
                <h2 id="sign-in-title" className="mt-2 text-2xl font-semibold tracking-tight">
                  Sign in to Velvetine Studio.
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Save your favorites and keep track of your orders.
                </p>
              </div>
              <button
                type="button"
                className="grid size-9 shrink-0 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close sign in popup"
                onClick={() => setSignInOpen(false)}
              >
                <X className="size-4" />
              </button>
            </div>
            <form className="mt-7 space-y-4" onSubmit={(event) => event.preventDefault()}>
              <label className="block text-sm font-medium" htmlFor="sign-in-email">
                Email address
                <input
                  id="sign-in-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-3 focus:ring-ring/30"
                />
              </label>
              <Button type="submit" size="lg" className="w-full justify-between">
                Continue with email <ArrowRight data-icon="inline-end" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}
