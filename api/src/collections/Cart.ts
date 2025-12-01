import type { CollectionConfig } from 'payload'

export const Cart: CollectionConfig = {
  slug: 'cart',

  admin: {
    useAsTitle: 'userId',
  },

  fields: [
    {
      name: 'userId',
      type: 'text',
      required: true,
    },

    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
        },
        {
          name: 'price',
          type: 'number',
          required: true,
        },
        {
          name: 'quantity',
          type: 'number',
          required: true,
          min: 1,
        },
        {
          name: 'lineTotal',
          type: 'number',
          admin: { readOnly: true },
        },
      ],
    },

    {
      name: 'total',
      type: 'number',
      admin: { readOnly: true },
    },
  ],

  hooks: {
    beforeChange: [
      ({ data }) => {
        type CartItem = {
          product: string | number
          price: number
          quantity: number
          lineTotal?: number
        }

        if (Array.isArray(data.items)) {
          data.items = data.items.map(
            (item: CartItem): CartItem => ({
              ...item,
              lineTotal: item.quantity * item.price,
            }),
          )
        }

        data.total = (data.items || []).reduce(
          (sum: number, item: CartItem) => sum + (item.lineTotal || 0),
          0,
        )
      },
    ],
  },
}
