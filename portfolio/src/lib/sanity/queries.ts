import { client } from '@/sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Query to get all published blogs
export async function getAllBlogs() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "coverImage": mainImage.asset->url,
    "category": categories[0]->title,
    tags,
    publishedAt,
    featured,
    likes,
    "readTime": round(length(pt::text(body)) / 5 / 200) ,
    author-> {
      name,
      "avatar": image.asset->url,
      bio
    }
  }`

  const blogs = await client.fetch(query)
  return blogs
}

// Query to get featured blogs only
export async function getFeaturedBlogs() {
  const query = `*[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    "coverImage": mainImage.asset->url,
    "category": categories[0]->title,
    tags,
    publishedAt,
    featured,
    likes,
    "readTime": round(length(pt::text(body)) / 5 / 200),
    author-> {
      name,
      "avatar": image.asset->url,
      bio
    }
  }`

  const blogs = await client.fetch(query)
  return blogs
}

// Query to get single blog by slug
export async function getBlogBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    "coverImage": mainImage.asset->url,
    "category": categories[0]->title,
    tags,
    publishedAt,
    featured,
    likes,
    likedBy,
    "readTime": round(length(pt::text(body)) / 5 / 200),
    body,
    author-> {
      name,
      "avatar": image.asset->url,
      bio
    }
  }`

  const blog = await client.fetch(query, { slug })
  return blog
}

// Query to get blogs by category
export async function getBlogsByCategory(category: string) {
  const query = `*[_type == "post" && categories[]->title match $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "coverImage": mainImage.asset->url,
    "category": categories[0]->title,
    tags,
    publishedAt,
    featured,
    likes,
    "readTime": round(length(pt::text(body)) / 5 / 200),
    author-> {
      name,
      "avatar": image.asset->url,
      bio
    }
  }`

  const blogs = await client.fetch(query, { category })
  return blogs
}

// Get all unique categories
export async function getAllCategories() {
  const query = `*[_type == "category"] {
    _id,
    title,
    "count": count(*[_type == "post" && references(^._id)])
  }`

  const categories = await client.fetch(query)
  return categories
}