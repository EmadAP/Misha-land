import { CollectionConfig } from 'payload'

export const Accessories: CollectionConfig = {
  slug: 'accessories',
  admin: {
    useAsTitle: 'title',
  },

  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'onSale',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'discount',
      type: 'number',
      min: 0,
      max: 100,
      admin: {
        condition: (data) => data?.onSale === true,
      },
    },
    {
      name: 'subType',
      type: 'select',
      required: true,
      options: [
        { label: 'Bag', value: 'bag' },
        { label: 'Shoes', value: 'shoes' },
        { label: 'Hat', value: 'hat' },
        { label: 'Umbrella', value: 'umbrella' },
        { label: 'Scarf / Shawl', value: 'scarf' },
        { label: 'Watch', value: 'watch' },
        { label: 'Gloves', value: 'gloves' },
        { label: 'Gift Set', value: 'gift_set' },
      ],
    },
    {
      name: 'quantity',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
    },
  ],
  hooks: {
    afterRead: [
      ({ doc }) => {
        return { ...doc, collection: 'accessories' }
      },
    ],
  },
}
