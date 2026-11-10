import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import { Button } from '@/components/ui/button'
import { productImages } from '@/lib/product-images'
import { ArrowUpRight, Check, CircleDot, Heart, Leaf, Star } from 'lucide-react'

const categories = [
  {
    image: productImages.vessel,
    alt: 'Decorative vessels from the shop collection',
    number: '01',
    title: 'Sculptural vessels',
    description: 'Quiet forms for shelves, tables, and the spaces between.',
  },
  {
    image: productImages.tray,
    alt: 'Tabletop styling and home accents from the shop',
    number: '02',
    title: 'Tabletop accents',
    description: 'Small rituals made better by an object with presence.',
  },
  {
    image: productImages.gift,
    alt: 'Candles and thoughtful gifts from the shop collection',
    number: '03',
    title: 'Thoughtful gifts',
    description: 'Personal pieces for the people who are hard to buy for.',
  },
]

const products = [
  {
    title: 'Arc vessel',
    type: 'Sculptural vase',
    price: '$64',
    image: productImages.vessel,
    badge: 'Bestseller',
  },
  { title: 'Dune catchall', type: 'Entryway tray', price: '$42', image: productImages.tray, badge: 'New' },
  {
    title: 'Halo taper set',
    type: 'Candle holders · Set of 2',
    price: '$48',
    image: productImages.gift,
    badge: 'Giftable',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main>
        <Hero />

        <section className="border-b border-border/70 bg-muted/30">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-7 sm:px-8">
            <p className="text-sm text-muted-foreground">Designed for the everyday</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold tracking-tight text-muted-foreground/70 sm:gap-x-12">
              <span className="flex items-center gap-2">
                <CircleDot className="size-4" />
                Slow made
              </span>
              <span className="flex items-center gap-2">
                <Leaf className="size-4" />
                Thoughtful materials
              </span>
              <span className="flex items-center gap-2">
                <Heart className="size-4" />
                Made to keep
              </span>
            </div>
          </div>
        </section>

        <section id="collection" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The collection
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Made for the corners <span className="text-muted-foreground">you notice.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              Warm, tactile forms that bring a little intention to your everyday rituals.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
                <Link
                  key={category.number}
                  href="#products"
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <span className="font-mono text-xs text-muted-foreground">{category.number}</span>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight">{category.title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{category.description}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-[gap] group-hover:gap-2.5">
                      Explore <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </Link>
            ))}
          </div>
        </section>

        <section id="products" className="border-y border-border/70 bg-muted/25">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Shop the edit
                </p>
                <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  A few good <span className="text-muted-foreground">things.</span>
                </h2>
              </div>
              <Link
                href="/Shop"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                View all objects <ArrowUpRight className="size-4" />
              </Link>
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.title}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                >
                  <div className="relative aspect-[1.08] overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-5 top-5 rounded-full border border-border bg-background/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground backdrop-blur">
                      {product.badge}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-semibold tracking-tight">{product.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{product.type}</p>
                      </div>
                      <span className="font-medium">{product.price}</span>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <button
                        type="button"
                        className="mt-5 flex w-full items-center justify-center rounded-lg border border-border py-2.5 text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        Add to bag
                      </button>
                      <button
                        type="button"
                        className="mt-5 flex w-full items-center justify-center rounded-lg border border-border py-2.5 text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        Explore
                        <ArrowUpRight data-icon="inline-end" size={2} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-24">
            <div className="relative min-h-[27rem] overflow-hidden rounded-3xl bg-[#c9b59d] dark:bg-[#403126]">
              <Image
                src={productImages.interior}
                alt="A considered interior with decorative home objects"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <span className="absolute bottom-5 left-5 rounded-full bg-background/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur">
                Designed in quiet
              </span>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Our story
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Designed on screen.
                <br />
                <span className="text-muted-foreground">Finished by hand.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Velvetine Studio. began with a simple belief: the things we use every day deserve to
                feel considered. We use 3D printing to explore forms without waste, then finish each
                piece with a human eye and a little patience.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Small-batch production',
                  'Thoughtful materials',
                  'Low-waste process',
                  'Packed with care',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium">
                    <Check className="size-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="#collection"
                className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                Read our story <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 lg:pb-32">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-7 py-14 text-primary-foreground sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute -right-20 -top-32 size-96 rounded-full border-40 border-primary-foreground/10" />
            <div className="relative max-w-2xl">
              <Star className="mb-6 size-7" />
              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                A little something for them.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-primary-foreground/75">
                For birthdays, new homes, and the people who make ordinary days feel special. Gift
                notes are always free.
              </p>
              <Button
                nativeButton={false}
                className="mt-8 bg-background text-foreground hover:bg-background/90"
                size="lg"
                render={<Link href="#products" />}
              >
                Shop gifts <ArrowUpRight data-icon="inline-end" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
