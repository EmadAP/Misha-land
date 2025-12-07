import { Accessory, MenClothing, WomenClothing } from '@/payload-types'
import type { PayloadRequest } from 'payload'

interface ProductsQuery {
  where?: {
    categories?: {
      in?: string
    }
  }
}

export const productEndpoints = {
  path: '/products',
  method: 'get',
  handler: async (req: PayloadRequest) => {
    try {
      const { where } = req.query as unknown as ProductsQuery
      const categoryId = where?.categories?.in

      if (!categoryId) {
        return new Response(JSON.stringify({ error: 'Category ID is required' }), { status: 400 })
      }

      const payload = req.payload
      const collections = ['men-clothing', 'women-clothing', 'accessories'] as const

      type PayloadResult<T> = {
        docs: T[]
        totalDocs: number
        limit: number
        page: number
        totalPages: number
      }

      const results: PayloadResult<MenClothing | WomenClothing | Accessory>[] = await Promise.all(
        collections.map(
          (col) =>
            payload.find({
              collection: col,
              where: {
                categories: { in: [categoryId] },
              },
              limit: 200,
            }) as Promise<PayloadResult<MenClothing | WomenClothing | Accessory>>,
        ),
      )

      const merged = results.flatMap((r, i) =>
        r.docs.map((p) => ({ ...p, collection: collections[i] })),
      )

      return new Response(JSON.stringify({ docs: merged }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    } catch (error) {
      console.error(error)
      return new Response(JSON.stringify({ error: (error as Error).message }), { status: 500 })
    }
  },
} as const
