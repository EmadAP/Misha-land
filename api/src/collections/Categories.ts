import { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'gender',
      type: 'select',
      required: true,
      options: [
        { label: 'Men', value: 'men' },
        { label: 'Women', value: 'women' },
      ],
    },
    {
      name: 'season',
      type: 'select',
      hasMany: true,
      required: true,
      options: [
        { label: 'Spring', value: 'spring' },
        { label: 'Summer', value: 'summer' },
        { label: 'Fall', value: 'fall' },
        { label: 'Winter', value: 'winter' },
      ],
    },
  ],
}
