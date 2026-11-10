
export type Filter = 'All' | 'Vessels' | 'Trays' | 'Gifts' | 'Decor' | 'Lighting' | 'Textiles'

export type Product = {
  id: number
  title: string
  category: Exclude<Filter, 'All'>
  material: string
  price: string
  image: string
}

const products: Product[] = [
  {
    id: 1,
    title: 'Arc vessel',
    category: 'Vessels',
    material: 'Sandstone PLA',
    price: '$64',
    image:
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 2,
    title: 'Dune catchall',
    category: 'Trays',
    material: 'Clay composite',
    price: '$42',
    image:
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 3,
    title: 'Halo taper set',
    category: 'Gifts',
    material: 'Chalk PLA · set of 2',
    price: '$48',
    image:
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 4,
    title: 'Mica bud vase',
    category: 'Vessels',
    material: 'Recycled matte PLA',
    price: '$38',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 5,
    title: 'Folded incense rest',
    category: 'Trays',
    material: 'Warm white PLA',
    price: '$24',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 6,
    title: 'Sol bookend',
    category: 'Gifts',
    material: 'Stone finish PLA',
    price: '$56',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 7,
    title: 'Arc vessel',
    category: 'Vessels',
    material: 'Sandstone PLA',
    price: '$64',
    image:
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 8,
    title: 'Dune catchall',
    category: 'Trays',
    material: 'Clay composite',
    price: '$42',
    image:
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 9,
    title: 'Halo taper set',
    category: 'Gifts',
    material: 'Chalk PLA · set of 2',
    price: '$48',
    image:
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 10,
    title: 'Mica bud vase',
    category: 'Vessels',
    material: 'Recycled matte PLA',
    price: '$38',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 11,
    title: 'Folded incense rest',
    category: 'Trays',
    material: 'Warm white PLA',
    price: '$24',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 12,
    title: 'Sol bookend',
    category: 'Gifts',
    material: 'Stone finish PLA',
    price: '$56',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
  },
]

export async function getProducts(
  filter: Filter,
  page: number,
  perPage: number
): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts =
        filter === 'All'
          ? products
          : products.filter((product) => product.category === filter)

      const startIndex = (page - 1) * perPage
      const paginatedProducts = filteredProducts.slice(
        startIndex,
        startIndex + perPage
      )

      resolve(paginatedProducts)
    }, 500)
  })
}
