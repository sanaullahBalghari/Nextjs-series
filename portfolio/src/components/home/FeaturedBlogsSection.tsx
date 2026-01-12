"use client";
import { useState, useEffect } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import BlogCard from "../ui/blogcard";
import { getFeaturedBlogs } from "@/lib/sanity/queries";

export default function FeaturedBlogsSection() {
  const [featuredBlogs, setFeaturedBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedBlogs();
  }, []);

  const fetchFeaturedBlogs = async () => {
    try {
      const data = await getFeaturedBlogs();
      setFeaturedBlogs(data);
    } catch (error) {
      console.error("Failed to fetch featured blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate total blogs stats
  const totalBlogs = featuredBlogs.length;
  const totalLikes = featuredBlogs.reduce((acc, blog) => acc + (blog.likes || 0), 0);

  if (isLoading) {
    return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center py-16 sm:py-20 lg:py-24">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent mb-4"></div>
          <p className="text-gray-400">Loading featured articles...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
      <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
              Latest Insights
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            Featured Articles
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
            Explore my thoughts on web development, programming, and technology trends
          </p>
        </div>

        {featuredBlogs.length > 0 ? (
          <>
            {/* Featured Blog (Large Card) */}
            <div className="mb-8 sm:mb-12">
              <BlogCard blog={featuredBlogs[0]} variant="featured" />
            </div>

            {/* Regular Featured Blogs Grid */}
            {featuredBlogs.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                {featuredBlogs.slice(1, 3).map((blog) => (
                  <BlogCard key={blog._id} blog={blog} />
                ))}
              </div>
            )}

            {/* View All Blogs Button */}
            <div className="text-center">
              <Link href="/blog">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold text-base sm:text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 inline-flex items-center gap-3">
                  View All Articles
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

          
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400 mb-4">No featured articles yet</p>
            <p className="text-sm text-gray-500">Check back soon for new content!</p>
          </div>
        )}
      </div>
    </section>
  );
}