"use client";
import { useState, useEffect } from "react";
import { ArrowLeft, Calendar, Clock, Eye, Heart, Share2, Bookmark, Twitter, Linkedin, Facebook, Link2 } from "lucide-react";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/ui/blogcard";

// This would be used in Next.js app router: app/blog/[slug]/page.tsx
export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  
  // In real implementation: const blog = blogs.find(b => b.slug === params.slug);
  // For demo, using first blog
  const blog = blogs[0];

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const trackLength = documentHeight - windowHeight;
      const progress = (scrollTop / trackLength) * 100;
      setReadProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedBlogs = blogs.filter(b => 
    b.id !== blog.id && 
    (b.category === blog.category || b.tags.some(tag => blog.tags.includes(tag)))
  ).slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

const [shareUrl, setShareUrl] = useState('');

useEffect(() => {
  setShareUrl(window.location.href);
}, []);


  const getCategoryColor = (category: string) => {
    const colors = {
      "Web Development": "from-blue-500 to-cyan-500",
      "Programming": "from-purple-500 to-pink-500",
      "Design": "from-pink-500 to-rose-500",
      "Backend": "from-green-500 to-emerald-500",
      "Frontend": "from-orange-500 to-yellow-500",
      "DevOps": "from-indigo-500 to-blue-500"
    };
    return colors[category] || "from-gray-500 to-gray-700";
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-150"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16">
          {/* Back Button */}
          <Link href="/blog">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg hover:bg-gray-800/50 transition-all mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">Back to Blog</span>
            </button>
          </Link>

          {/* Category & Date */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${getCategoryColor(blog.category)}`}>
              {blog.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(blog.publishedAt)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {blog.readTime}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 max-w-4xl">
            {blog.title}
          </h1>

          {/* Author Info & Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 sm:mb-12">
            <div className="flex items-center gap-4">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-purple-500/50"
              />
              <div>
                <p className="text-lg font-bold text-white">{blog.author.name}</p>
                <p className="text-sm text-gray-400">{blog.author.role}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg hover:bg-gray-800/50 transition-all"
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                <span className="text-sm">{blog.likes + (isLiked ? 1 : 0)}</span>
              </button>
              
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="p-2 bg-gray-900/50 border border-gray-700 rounded-lg hover:bg-gray-800/50 transition-all"
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-purple-500 text-purple-500' : ''}`} />
              </button>

              <div className="relative group">
                <button className="p-2 bg-gray-900/50 border border-gray-700 rounded-lg hover:bg-gray-800/50 transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
                
                {/* Share Dropdown */}
                <div className="absolute right-0 top-full mt-2 p-3 bg-gray-900 border border-gray-700 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 min-w-[200px]">
                  <p className="text-xs text-gray-400 mb-2 font-semibold">Share this article</p>
                  <div className="flex flex-col gap-2">
                    <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${blog.title}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800 rounded text-sm transition-colors">
                      <Twitter className="w-4 h-4 text-blue-400" />
                      Twitter
                    </a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800 rounded text-sm transition-colors">
                      <Linkedin className="w-4 h-4 text-blue-500" />
                      LinkedIn
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800 rounded text-sm transition-colors">
                      <Facebook className="w-4 h-4 text-blue-600" />
                      Facebook
                    </a>
                    <button onClick={() => navigator.clipboard.writeText(shareUrl)} className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800 rounded text-sm transition-colors text-left">
                      <Link2 className="w-4 h-4 text-gray-400" />
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative rounded-2xl overflow-hidden mb-12 sm:mb-16">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-4xl mx-auto">
            
            {/* Stats Bar */}
            <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl mb-12">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-400" />
                <span className="text-lg font-semibold">{blog.views.toLocaleString()}</span>
                <span className="text-sm text-gray-400">views</span>
              </div>
              <div className="h-8 w-px bg-gray-700" />
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-lg font-semibold">{blog.likes + (isLiked ? 1 : 0)}</span>
                <span className="text-sm text-gray-400">likes</span>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose-content text-gray-300 leading-relaxed space-y-6 mb-12"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            <div className="mb-12 pb-12 border-b border-gray-800">
              <h3 className="text-lg font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-full text-sm font-medium hover:border-purple-500/50 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Card */}
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8 mb-12">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-purple-500/50"
                />
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{blog.author.name}</h3>
                  <p className="text-purple-400 text-sm mb-3">{blog.author.role}</p>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Passionate about building scalable web applications and sharing knowledge with the developer community. 
                    Writing about web development, programming, and technology trends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedBlogs.length > 0 && (
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <BlogCard key={relatedBlog.id} blog={relatedBlog} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}