import { Suspense } from 'react'

import ShopClient from '@/components/ShopContent'
import { getProducts, type Filter } from '@/lib/api'

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

const filters: Filter[] = ['All', 'Vessels', 'Trays', 'Gifts', 'Decor', 'Lighting', 'Textiles']

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

export default function Shop({ searchParams }: PageProps) {
  return (
    <Suspense fallback={<ShopLoading />}>
      <ShopData searchParams={searchParams} />
    </Suspense>
  )
}

async function ShopData({ searchParams }: PageProps) {
  const params = await searchParams
  const requestedPage = Number(firstValue(params.page))
  const currentPage = Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1
  const requestedCategory = firstValue(params.category) as Filter | undefined
  const category = requestedCategory && filters.includes(requestedCategory) ? requestedCategory : 'All'
  const products = await getProducts(category, currentPage, 6)

  return <ShopClient products={products} currentPage={currentPage} category={category} />
}

function ShopLoading() {
  return (
    <main className="min-h-screen bg-background px-5 py-24 text-foreground sm:px-8">
      <div className="mx-auto max-w-7xl animate-pulse space-y-8">
        <div className="h-4 w-24 rounded bg-muted" />
        <div className="h-16 max-w-2xl rounded bg-muted" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => <div key={item} className="aspect-[.88] rounded-2xl bg-muted" />)}
        </div>
      </div>
    </main>
  )
}
