import { CollectionConfig } from 'payload'

export const WomenClothing: CollectionConfig = {
  slug: 'women-clothing',
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
        { label: 'Blouse', value: 'blouse' },
        { label: 'Dress', value: 'dress' },
        { label: 'Hoodie / Sweatshirt', value: 'hoodie' },
        { label: 'Cardigan', value: 'cardigan' },
        { label: 'Jacket', value: 'jacket' },
        { label: 'Skirt', value: 'skirt' },
        { label: 'Leggings', value: 'leggings' },
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
}
