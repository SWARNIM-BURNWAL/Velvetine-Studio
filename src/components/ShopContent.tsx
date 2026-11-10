'use client'

import gsap from 'gsap'
import Link from 'next/link'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { Button } from '@base-ui/react'
import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight, Check, X } from 'lucide-react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import type { Filter, Product } from '@/lib/api'

gsap.registerPlugin(useGSAP)

const filters: Filter[] = ['All', 'Vessels', 'Trays', 'Gifts']

type ShopContentProps = {
  products: Product[]
  currentPage: number
  category: Filter
}

export default function ShopContent({ products, currentPage, category }: ShopContentProps) {
  const [filter, setFilter] = useState<Filter>(category)
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const lightboxRef = useRef<HTMLDivElement>(null)
  const lightboxCardRef = useRef<HTMLDivElement>(null)

  const visibleProducts =
    filter === 'All' ? products : products.filter((product) => product.category === filter)

  useGSAP(
    () => {
      gsap.fromTo(
        '[data-gallery-card]',
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform',
        }
      )
    },
    { scope: galleryRef, dependencies: [filter] }
  )

  useGSAP(
    () => {
      if (!activeProduct || !lightboxRef.current || !lightboxCardRef.current) return

      gsap.fromTo(
        lightboxRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.25, ease: 'power2.out' }
      )
      gsap.fromTo(
        lightboxCardRef.current,
        { autoAlpha: 0, y: 24, scale: 0.97 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, ease: 'power3.out' }
      )
    },
    { dependencies: [activeProduct] }
  )

  useEffect(() => {
    if (!activeProduct) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveProduct(null)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [activeProduct])

  function animateProduct(target: HTMLElement, scale: number) {
    const image = target.querySelector('img')
    if (image) gsap.to(image, { scale, duration: 0.5, ease: 'power3.out' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <section className=" px-5 sm:px-8 lg:py-12">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/"
              className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back home
            </Link>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  The Velvetine Studio. shop
                </p>
                <h1 className="text-balance text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  Objects with a little <span className="text-primary">soul.</span>
                </h1>
              </div>
              <p className="max-w-sm text-lg leading-8 text-muted-foreground lg:pb-2">
                Small-batch pieces for shelves, tables, and the people who make home feel like home.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-border pb-5">
            <p className="text-sm text-muted-foreground">
              {visibleProducts.length} objects in this edit
            </p>
            <div
              className="flex flex-wrap gap-1 rounded-xl bg-muted p-1"
              aria-label="Filter products"
            >
              {filters.map((item) => (
                <Button
                  key={item}

                  onClick={() => setFilter(item)}
                  aria-pressed={filter === item}
                  className={`rounded-lg px-3.5 py-2 text-sm transition-colors ${filter === item ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          <div
            ref={galleryRef}
            className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleProducts.map((product) => (
              <Button
                key={product.id}

                data-gallery-card
                className="group text-left"
                onClick={() => setActiveProduct(product)}
                onMouseEnter={(event) => animateProduct(event.currentTarget, 1.05)}
                onMouseLeave={(event) => animateProduct(event.currentTarget, 1)}
              >
                <div className="relative aspect-[.88] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                    {product.category}
                  </span>
                  <span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-background/90 text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-medium tracking-tight">{product.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{product.material}</p>
                  </div>
                  <span className="text-sm font-medium">{product.price}</span>
                </div>
              </Button>
            ))}
          </div>

          <Pagination
            className="mt-12 border-t border-border/70 pt-8 "
            aria-label="Shop pagination"
          >
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="?page=1" isActive={currentPage === 1}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="?page=2" isActive={currentPage === 2}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="?page=3" isActive={currentPage === 3}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>

        <section className="border-t border-border/70 bg-muted/25 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Made to keep
              </p>
              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Choose slowly. Keep forever.
              </h2>
            </div>
            <div className="grid gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                Printed in small batches
              </span>
              <span className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                Packed with care
              </span>
            </div>
          </div>
        </section>
      </main>

      {activeProduct && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-80 grid place-items-center bg-foreground/40 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setActiveProduct(null)}
        >
          <div
            ref={lightboxCardRef}
            className="relative grid max-h-[92svh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl md:grid-cols-[1.15fr_.85fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close product preview"
              onClick={() => setActiveProduct(null)}
              className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-background/85 text-foreground shadow-md backdrop-blur transition-colors hover:bg-background"
            >
              <X className="size-4" />
            </button>
            <div className="relative min-h-72 bg-muted md:min-h-[34rem]">
              <Image
                src={activeProduct.image}
                alt={activeProduct.title}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {activeProduct.category}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {activeProduct.title}
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                {activeProduct.material}. Designed in quiet, printed in small batches, and finished
                with care.
              </p>
              <div className="mt-8 flex items-center justify-between border-y border-border py-4">
                <span className="text-sm text-muted-foreground">Price</span>
                <span className="font-medium">{activeProduct.price}</span>
              </div>

              <Button
                nativeButton={false}
                className="mt-5 flex w-full items-center justify-center rounded-lg border border-border py-2.5 text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                render={<Link href="mailto:" />}
              >
                CONTACT US TO ORDER
                <ArrowUpRight data-icon="inline-end" />
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                We will reply with availability and shipping details.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
