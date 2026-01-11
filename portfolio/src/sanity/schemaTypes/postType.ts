import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    // Title
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),

    // Slug
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    // Author
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'author'}],
      validation: (rule) => rule.required(),
    }),

    // Cover Image
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Cover Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ],
      validation: (rule) => rule.required(),
    }),

    // Categories
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),

    // Published Date
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),

    // Excerpt (Short Description)
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'Short description of the blog post (shown in cards)',
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),

    // Body (Content)
    defineField({
      name: 'body',
      type: 'blockContent',
      title: 'Body',
      validation: (rule) => rule.required(),
    }),

    // Tags (NEW)
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'Add relevant tags (e.g., React, Next.js, TypeScript)',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),

    // Featured Toggle (NEW)
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Post',
      description: 'Mark this post as featured (shows on homepage)',
      initialValue: false,
    }),

    // Likes Counter (NEW)
    defineField({
      name: 'likes',
      type: 'number',
      title: 'Likes',
      description: 'Number of likes (managed by API)',
      initialValue: 0,
      readOnly: true, // You'll update this via API, not manually
    }),

    // Liked By (NEW - for tracking who liked)
    defineField({
      name: 'likedBy',
      type: 'array',
      title: 'Liked By',
      description: 'IP addresses or user IDs who liked this post',
      of: [{type: 'string'}],
      hidden: true, // Hidden from UI, managed by API
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      featured: 'featured',
    },
    prepare(selection) {
      const {author, featured} = selection
      return {
        ...selection,
        subtitle: `${author}${featured ? ' • Featured' : ''}`,
      }
    },
  },
})