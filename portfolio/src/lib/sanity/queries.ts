import { client } from '@/sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source).url()
}

// Get all blogs
export async function getAllBlogs() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "excerpt": pt::text(excerpt),
    "slug": slug.current,
    excerpt,
    "coverImage": mainImage.asset->url,
    "category": categories[0]->title,
 "tags": tags,


    publishedAt,
    featured,
    likes,
    "readTime": string(round(length(pt::text(body)) / 5 / 200)) + " min read",
    author-> {
      name,
      "avatar": image.asset->url,
      "role": bio
    }
  }`

  const blogs = await client.fetch(query)
  return blogs
}

// Get featured blogs only
export async function getFeaturedBlogs() {
  const query = `*[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
 "excerpt": excerpt,

    "coverImage": mainImage.asset->url,
    "category": categories[0]->title,
  "tags": tags,


    publishedAt,
    featured,
    likes,
    "readTime": string(round(length(pt::text(body)) / 5 / 200)) + " min read",
    author-> {
      name,
      "avatar": image.asset->url,
      "role": bio
    }
  }`

  const blogs = await client.fetch(query)
  return blogs
}

// Get single blog by slug
export async function getBlogBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
   "excerpt": pt::text(excerpt),
    "coverImage": mainImage.asset->url,
    "category": categories[0]->title,
   "tags": tags,

    publishedAt,
    featured,
    likes,
    likedBy,
    "readTime": string(round(length(pt::text(body)) / 5 / 200)) + " min read",
    body,
    author-> {
      name,
      "avatar": image.asset->url,
     "role": pt::text(bio)

    }
  }`

  const blog = await client.fetch(query, { slug })
  return blog
}