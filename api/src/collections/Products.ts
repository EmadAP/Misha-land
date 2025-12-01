import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    // Product Title
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    // Product Image
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    // Description
    {
      name: 'description',
      type: 'textarea',
    },

    // Base Price
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },

    // On Sale
    {
      name: 'onSale',
      type: 'checkbox',
      defaultValue: false,
    },

    // Discount %
    {
      name: 'discount',
      type: 'number',
      min: 0,
      max: 100,
      admin: {
        condition: (data) => data?.onSale === true,
      },
    },

    // Sizes
    {
      name: 'size',
      type: 'select',
      hasMany: true,
      required: true,
      options: [
        { label: 'SM', value: 'sm' },
        { label: 'MD', value: 'md' },
        { label: 'LG', value: 'lg' },
        { label: 'XL', value: 'xl' },
        { label: '2XL', value: 'xxl' },
        { label: '3XL', value: 'xxxl' },
      ],
    },

    // Colors
    {
      name: 'color',
      type: 'select',
      hasMany: true,
      required: true,
      options: [
        { label: 'Black', value: 'black' },
        { label: 'White', value: 'white' },
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Orange', value: 'orange' },
        { label: 'Brown', value: 'brown' },
      ],
    },

    // Stock Quantity
    {
      name: 'quantity',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
    },

    // Relationships: Categories
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
    },
  ],
}
