"use client";
import { useState } from "react";
import { Calendar, Clock, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  blog: {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    coverImage: string;
    author: {
      name: string;
      avatar: string;
      role: string;
    };
    category: string;
    tags: string[];
    readTime: string;
    publishedAt: string;
    likes: number;
  };
  variant?: "default" | "featured";
}

export default function BlogCard({ blog, variant = "default" }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [likes, setLikes] = useState(blog.likes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Web Development": "from-blue-500 to-cyan-500",
    "Backend": "from-green-500 to-emerald-500",
    "Frontend": "from-orange-500 to-yellow-500",
    "AI/Automation": "from-purple-500 to-pink-500"
  };
  return colors[category] || "from-gray-500 to-gray-700";
};

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
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

  if (variant === "featured") {
    return (
      <Link href={`/blog/${blog.slug}`}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
        >
          <div className="grid md:grid-cols-2 gap-6 p-6 sm:p-8">
            <div className="relative h-64 md:h-full overflow-hidden rounded-xl">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(blog.category)} shadow-lg`}>
                  {blog.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
                  {blog.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-400 mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags?.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-10 h-10 rounded-full border-2 border-purple-500/50"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{blog.author.name}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(blog.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                <ArrowRight className={`w-6 h-6 text-purple-400 transition-transform ${isHovered ? 'translate-x-2' : ''}`} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      <Link href={`/blog/${blog.slug}`}>
        <div className="relative h-56 sm:h-64 overflow-hidden cursor-pointer">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-60'}`} />
          
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(blog.category)} shadow-lg`}>
              {blog.category}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            <button
              onClick={handleLike}
              disabled={isLiking}
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors disabled:opacity-50"
            >
              <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
              <span className="text-xs font-semibold">{likes}</span>
            </button>
          </div>
        </div>
      </Link>

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(blog.publishedAt)}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {blog.readTime}
          </span>
        </div>

        <Link href={`/blog/${blog.slug}`}>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all cursor-pointer line-clamp-2">
            {blog.title}
          </h3>
        </Link>
        
        <p className="text-sm sm:text-base text-gray-400 mb-4 line-clamp-2">
          {blog.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags?.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-gray-800/50 border border-gray-700 rounded-md text-xs text-gray-300 hover:border-purple-500/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-center gap-2">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
             
              className="w-8 h-8 rounded-full border-2 border-purple-500/50"
            />
            <span className="text-sm font-medium text-gray-300">{blog.author.name}</span>
          </div>

          <Link href={`/blog/${blog.slug}`}>
            <button className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 group">
              Read More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}