import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogs } from "@/lib/sanity/queries";
import BlogDetailClient from "./BlogDetailClient";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog: any) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Await params first (Next.js 15 requirement)
  const { slug } = await params;
  
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Get related blogs
  const allBlogs = await getAllBlogs();
  const relatedBlogs = allBlogs
    .filter((b: any) => 
      b._id !== blog._id && 
      (b.category === blog.category || b.tags?.some((tag: string) => blog.tags?.includes(tag)))
    )
    .slice(0, 3);

  return <BlogDetailClient blog={blog} relatedBlogs={relatedBlogs} />;
}