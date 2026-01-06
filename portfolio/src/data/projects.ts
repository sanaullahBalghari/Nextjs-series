// data/projects.ts

export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  featured: boolean;
  stats?: {
    users?: string;
    performance?: string;
    rating?: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    shortDescription: "A full-stack e-commerce solution with real-time inventory management and payment integration",
    fullDescription: "A comprehensive e-commerce platform built with Next.js and Node.js, featuring real-time inventory tracking, secure payment processing with Stripe, advanced search functionality, and an admin dashboard for managing products, orders, and customers. The platform handles thousands of transactions daily with 99.9% uptime.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gwbKPYkFNdBtg7ZQgrbIcRKIP3xy67yKcg&s",
    category: "Full Stack",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "TailwindCSS", "Redis"],
    features: [
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "Advanced product search and filtering",
      "Admin dashboard with analytics",
      "Order tracking and notifications",
      "Multi-vendor support"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    date: "2024-01",
    featured: true,
    stats: {
      users: "10K+",
      performance: "98%",
      rating: "4.8/5"
    }
  },
  {
    id: "2",
    title: "Task Management App",
    slug: "task-management-app",
    shortDescription: "Collaborative task management tool with real-time updates and team collaboration features",
    fullDescription: "A modern task management application that enables teams to collaborate efficiently. Built with React and Firebase, it features real-time updates, drag-and-drop task organization, team chat, file sharing, and comprehensive reporting tools. The app uses WebSockets for instant synchronization across all devices.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gwbKPYkFNdBtg7ZQgrbIcRKIP3xy67yKcg&s",
    category: "Web App",
    technologies: ["React", "Firebase", "TypeScript", "Material-UI", "WebSockets"],
    features: [
      "Real-time collaboration",
      "Drag-and-drop task boards",
      "Team chat integration",
      "File attachments",
      "Progress tracking",
      "Custom workflows"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    date: "2023-11",
    featured: true,
    stats: {
      users: "5K+",
      performance: "95%",
      rating: "4.6/5"
    }
  },
  {
    id: "3",
    title: "AI Content Generator",
    slug: "ai-content-generator",
    shortDescription: "AI-powered content creation tool using GPT-4 for generating marketing copy and blog posts",
    fullDescription: "An innovative AI-powered platform that helps marketers and content creators generate high-quality content. Leveraging GPT-4, it can create blog posts, social media content, ad copy, and more. Features include SEO optimization suggestions, tone adjustment, multi-language support, and content scheduling.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gwbKPYkFNdBtg7ZQgrbIcRKIP3xy67yKcg&s",
    category: "AI/ML",
    technologies: ["Next.js", "OpenAI API", "PostgreSQL", "TailwindCSS", "Vercel"],
    features: [
      "GPT-4 integration",
      "SEO optimization",
      "Multi-language support",
      "Content templates",
      "Tone customization",
      "Content scheduling"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    date: "2024-02",
    featured: true,
    stats: {
      users: "15K+",
      performance: "99%",
      rating: "4.9/5"
    }
  },
  {
    id: "4",
    title: "Healthcare Dashboard",
    slug: "healthcare-dashboard",
    shortDescription: "Medical analytics dashboard for healthcare providers with patient management system",
    fullDescription: "A comprehensive healthcare management system designed for medical facilities. Features include patient record management, appointment scheduling, medical history tracking, prescription management, and detailed analytics. Built with security and HIPAA compliance in mind.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gwbKPYkFNdBtg7ZQgrbIcRKIP3xy67yKcg&s",
    category: "Dashboard",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "AWS"],
    features: [
      "Patient record management",
      "Appointment scheduling",
      "Medical analytics",
      "Prescription tracking",
      "HIPAA compliant",
      "Multi-user access control"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    date: "2023-09",
    featured: false,
    stats: {
      users: "3K+",
      performance: "97%",
      rating: "4.7/5"
    }
  },
  {
    id: "5",
    title: "Social Media Analytics",
    slug: "social-media-analytics",
    shortDescription: "Comprehensive social media analytics platform with AI-powered insights and reporting",
    fullDescription: "A powerful analytics platform that aggregates data from multiple social media platforms. Provides deep insights into audience behavior, content performance, and growth trends. Features AI-powered recommendations, automated reporting, and competitive analysis.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gwbKPYkFNdBtg7ZQgrbIcRKIP3xy67yKcg&s",
    category: "Analytics",
    technologies: ["Next.js", "Python", "MongoDB", "D3.js", "TensorFlow"],
    features: [
      "Multi-platform integration",
      "AI-powered insights",
      "Automated reporting",
      "Competitive analysis",
      "Growth predictions",
      "Custom dashboards"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    date: "2023-12",
    featured: false,
    stats: {
      users: "8K+",
      performance: "96%",
      rating: "4.5/5"
    }
  },
  {
    id: "6",
    title: "Real Estate Platform",
    slug: "real-estate-platform",
    shortDescription: "Modern real estate marketplace with virtual tours and advanced property search",
    fullDescription: "A cutting-edge real estate platform that revolutionizes property searching. Features include 3D virtual tours, advanced filtering, mortgage calculators, neighborhood insights, and direct messaging with agents. Built for both buyers and real estate professionals.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gwbKPYkFNdBtg7ZQgrbIcRKIP3xy67yKcg&s",
    category: "Full Stack",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Three.js", "Mapbox"],
    features: [
      "3D virtual tours",
      "Advanced property search",
      "Mortgage calculator",
      "Neighborhood insights",
      "Agent messaging",
      "Saved searches"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    date: "2023-10",
    featured: false,
    stats: {
      users: "12K+",
      performance: "94%",
      rating: "4.6/5"
    }
  }
];