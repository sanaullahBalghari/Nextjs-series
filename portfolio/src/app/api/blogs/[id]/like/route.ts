import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'

// Get client IP address
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown'
  return ip
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
     const { id: blogId } = await context.params
    const userIP = getClientIP(request)

    // Fetch current blog data
    const blog = await client.fetch(
      `*[_type == "post" && _id == $id][0] { _id, likes, likedBy }`,
      { id: blogId }
    )

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    const hasLiked = blog.likedBy?.includes(userIP) || false

    if (hasLiked) {
      // Unlike
      await client
        .patch(blogId)
        .set({ likes: Math.max(0, blog.likes - 1) })
        .unset([`likedBy[_key == "${userIP}"]`])
        .commit()

      return NextResponse.json({
        success: true,
        likes: Math.max(0, blog.likes - 1),
        hasLiked: false,
      })
    } else {
      // Like
      await client
        .patch(blogId)
        .set({
          likes: (blog.likes || 0) + 1,
          likedBy: [...(blog.likedBy || []), userIP],
        })
        .commit()

      return NextResponse.json({
        success: true,
        likes: (blog.likes || 0) + 1,
        hasLiked: true,
      })
    }
  } catch (error) {
    console.error('Like error:', error)
    return NextResponse.json(
      { error: 'Failed to process like' },
      { status: 500 }
    )
  }
}
