"use client";
import { useState, useEffect } from "react";
import { ArrowLeft, Calendar, Clock, Heart, Share2, Bookmark, Twitter, Linkedin, Facebook, Link2 } from "lucide-react";
import Link from "next/link";
import BlogCard from "@/components/ui/blogcard";
import { PortableText } from '@portabletext/react';

// Custom components for PortableText rendering

type Blog = {
  _id: string;
  title: string;
  category: string;
  publishedAt: string;
  readTime: string;
  likes?: number;
  coverImage: string;
  tags?: string[];
  body: any;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
};

const portableTextComponents = {
  block: {
    h1: ({children}: any) => <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>,
    h2: ({children}: any) => <h2 className="text-3xl font-bold mb-4 mt-8">{children}</h2>,
    h3: ({children}: any) => <h3 className="text-2xl font-bold mb-3 mt-6">{children}</h3>,
    h4: ({children}: any) => <h4 className="text-xl font-bold mb-2 mt-4">{children}</h4>,
    normal: ({children}: any) => <p className="mb-4 leading-relaxed text-gray-300">{children}</p>,
    blockquote: ({children}: any) => (
      <blockquote className="border-l-4 border-purple-500 pl-4 italic my-6 text-gray-400">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}: any) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-300">{children}</ol>,
  },
  listItem: {
    bullet: ({children}: any) => <li className="ml-4">{children}</li>,
    number: ({children}: any) => <li className="ml-4">{children}</li>,
  },
  marks: {
    strong: ({children}: any) => <strong className="font-bold text-white">{children}</strong>,
    em: ({children}: any) => <em className="italic">{children}</em>,
    code: ({children}: any) => (
      <code className="bg-gray-800 px-2 py-1 rounded text-purple-400 font-mono text-sm">
        {children}
      </code>
    ),
    link: ({children, value}: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:text-purple-300 underline"
      >
        {children}
      </a>
    ),
  },
  types: {
    code: ({value}: any) => (
      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-6">
        <code className="text-sm text-gray-300 font-mono">{value.code}</code>
      </pre>
    ),
    image: ({value}: any) => (
      <img
        src={value.asset.url}
        alt={value.alt || 'Blog image'}
        className="w-full rounded-lg my-6"
      />
    ),
  },
};

export default function BlogDetailClient({ blog, relatedBlogs }: { blog: Blog, relatedBlogs: Blog[]}) {

      console.log("TAGS 👉", blog.tags);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(blog.likes || 0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const [shareUrl, setShareUrl] = useState('');
  const [isLiking, setIsLiking] = useState(false);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

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

  const handleLike = async () => {
    if (isLiking) return;

    setIsLiking(true);
    try {
      const response = await fetch(`/api/blogs/${blog._id}/like`, {
        method: 'POST',
      });

      const data = await response.json();

      if (data.success) {
        setLikes(data.likes);
        setIsLiked(data.hasLiked);
      }
    } catch (error) {
      console.error('Failed to like post:', error);
    } finally {
      setIsLiking(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Web Development": "from-blue-500 to-cyan-500",
    "Backend": "from-green-500 to-emerald-500",
    "Frontend": "from-orange-500 to-yellow-500",
    "AI/Automation": "from-purple-500 to-pink-500"
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
                onClick={handleLike}
                disabled={isLiking}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg hover:bg-gray-800/50 transition-all disabled:opacity-50"
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                <span className="text-sm">{likes}</span>
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
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-lg font-semibold">{likes}</span>
                <span className="text-sm text-gray-400">likes</span>
              </div>
            </div>

            {/* Article Content - FIXED */}
            <div className="prose prose-invert prose-lg max-w-none mb-12">
              <PortableText 
                value={blog.body} 
                components={portableTextComponents}
              />
            </div>

            {/* Tags */}
            <div className="mb-12 pb-12 border-b border-gray-800">
              <h3 className="text-lg font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">

                {Array.isArray(blog.tags) && blog.tags.length > 0 ? (
  blog.tags.map((tag: string, i: number) => (
    <span key={i} className="text-sm px-3 py-1 bg-gray-800 rounded-full">
      #{tag}
    </span>
  ))
) : (
  <span className="text-gray-500">No tags</span>
)}

  {/* {blog.tags && blog.tags.length > 0 ? (
  blog.tags.map((tag, i) => (
    <span key={i} className="...">#{tag}</span>
  ))
) : (
  <span className="text-gray-500">No tags</span>
)} */}


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
                {relatedBlogs.map((relatedBlog: any) => (
                  <BlogCard key={relatedBlog._id} blog={relatedBlog} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}