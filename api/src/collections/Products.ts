import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Clothing', value: 'clothing' },
        { label: 'Accessory', value: 'accessory' },
      ],
    },
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
      admin: {
        condition: (data) => data?.type === 'clothing',
      },
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
