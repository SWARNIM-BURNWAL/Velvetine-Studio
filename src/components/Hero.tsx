import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Heart, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/70">
      <div className="pointer-events-none absolute inset-0 paper-grain opacity-60" />
      <div className="pointer-events-none absolute -right-40 -top-40 size-[32rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -left-32 size-[26rem] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[min(760px,calc(100vh-4.5rem))] w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-10 lg:py-24">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="size-3.5" />
            Objects for slower living
          </div>
          <h1 className="text-balance text-5xl font-semibold leading-[1.03] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Small objects. <span className="text-primary">Lasting presence.</span>
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
            Sculptural home decor and thoughtful gifts, 3D printed in small batches and finished for
            the spaces, and people, you love.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button nativeButton={false} size="lg" render={<Link href="/Shop" />}>
              Shop the collection
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              nativeButton={false}
              size="lg"
              variant="outline"
              render={<Link href="#story" />}
            >
              Our approach
              <ArrowUpRight data-icon="inline-end" />
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Heart className="size-4 text-primary" />
              Made in small batches
            </span>
            <span className="flex items-center gap-2">Free delivery over $75</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[33rem] lg:ml-auto">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-primary/20 via-violet-500/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-card/90 p-3 shadow-2xl shadow-primary/10 backdrop-blur">
            <div className="relative flex aspect-[1.05] items-center justify-center overflow-hidden rounded-[1.25rem] bg-[#d7c6ae] dark:bg-[#3a2f27]">
              <Image
                src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1600&q=90"
                alt="Sculptural Velvetine Studio. vessel in a warm interior"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#3d3026]/60 via-transparent to-[#3d3026]/10" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-black/10 bg-[#eee5d8]/80 px-3 py-1.5 text-[11px] font-medium text-[#5e5144] backdrop-blur dark:border-white/10 dark:bg-[#201b17]/70 dark:text-[#d9c9b6]">
                Velvetine Studio. / 01
              </div>
              <div className="absolute bottom-5 right-5 rounded-lg border border-black/10 bg-[#eee5d8]/80 px-3 py-2 text-right text-[11px] backdrop-blur dark:border-white/10 dark:bg-[#201b17]/70">
                <p className="font-medium text-[#3d332b] dark:text-[#eee5d8]">Arc vessel</p>
                <p className="text-[#766556] dark:text-[#c0af9d]">Sandstone · 01 / 12</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 pb-1 pt-4 text-xs text-muted-foreground">
              <span>Velvetine Studio. studio / 01</span>
              <span className="font-mono tracking-wider">SANDSTONE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
