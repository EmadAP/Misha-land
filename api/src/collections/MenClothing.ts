import { CollectionConfig } from 'payload'

export const MenClothing: CollectionConfig = {
  slug: 'men-clothing',
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
      name: 'size',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'SM', value: 'sm' },
        { label: 'MD', value: 'md' },
        { label: 'LG', value: 'lg' },
        { label: 'XL', value: 'xl' },
        { label: '2XL', value: 'xxl' },
        { label: '3XL', value: 'xxxl' },
      ],
    },
    {
      name: 'subType',
      type: 'select',
      required: true,
      options: [
        { label: 'T-shirt', value: 'tshirt' },
        { label: 'Shirt', value: 'shirt' },
        { label: 'Hoodie / Sweatshirt', value: 'hoodie' },
        { label: 'Sweater / Knitwear', value: 'sweater' },
        { label: 'Jacket', value: 'jacket' },
        { label: 'Shorts', value: 'shorts' },
        { label: 'Chino Pants', value: 'chino_pants' },
        { label: 'Jeans', value: 'jeans' },
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
        return { ...doc, collection: 'men-clothing' }
      },
    ],
  },
}
