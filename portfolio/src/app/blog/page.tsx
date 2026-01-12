"use client";
import { useState, useEffect } from "react";
import { Search, Filter, TrendingUp, Clock } from "lucide-react";
import BlogCard from "@/components/ui/blogcard";
import { getAllBlogs } from "@/lib/sanity/queries";

export default function AllBlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const data = await getAllBlogs();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = [
    { id: "all", label: "All Articles", count: blogs.length },
    { id: "Web Development", label: "Web Development", count: blogs.filter(b => b.category === "Web Development").length },
    { id: "Backend", label: "Backend", count: blogs.filter(b => b.category === "Backend").length },
    { id: "Frontend", label: "Frontend", count: blogs.filter(b => b.category === "Frontend").length },
    { id: "AI/Automation", label: "AI/Automation", count: blogs.filter(b => b.category === "AI/Automation").length },
  ];

  // Filter logic
  let filteredBlogs = activeCategory === "all" 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  if (searchQuery) {
    filteredBlogs = filteredBlogs.filter(blog => 
      blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags?.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  // Sort logic
  if (sortBy === "newest") {
    filteredBlogs.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  } else if (sortBy === "oldest") {
    filteredBlogs.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
  } else if (sortBy === "popular") {
    filteredBlogs.sort((a, b) => (b.likes || 0) - (a.likes || 0));
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent mb-4"></div>
          <p className="text-gray-400">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            Blog & Articles
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, programming, and technology
          </p>
        </div>

        {/* Search and Sort Bar */}
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles, topics, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-sm sm:text-base focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="pl-12 pr-8 py-3 sm:py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-sm sm:text-base focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer min-w-[180px]"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Liked</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-semibold">Filter by Category:</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/50 scale-105"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700"
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
          <div className="text-sm sm:text-base text-gray-400">
            Showing <span className="text-purple-400 font-semibold">{filteredBlogs.length}</span> article{filteredBlogs.length !== 1 ? 's' : ''}
          </div>
          
          {sortBy === "popular" && (
            <div className="flex items-center gap-2 text-sm text-purple-400">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Sorted by likes</span>
            </div>
          )}
          
          {sortBy === "newest" && (
            <div className="flex items-center gap-2 text-sm text-blue-400">
              <Clock className="w-4 h-4" />
              <span className="hidden sm:inline">Latest articles</span>
            </div>
          )}
        </div>

        {/* Blogs Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20">
            <div className="text-5xl sm:text-6xl mb-4">📝</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-2">No articles found</h3>
            <p className="text-sm sm:text-base text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Newsletter CTA */}
      
      </div>
    </div>
  );
}