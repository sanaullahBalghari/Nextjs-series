// data/blogs.ts

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
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
  featured: boolean;
  views: number;
  likes: number;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Building Scalable Web Applications with Next.js 14",
    slug: "building-scalable-web-apps-nextjs-14",
    excerpt: "Learn how to leverage the latest features in Next.js 14 to build high-performance, scalable web applications with server components and improved routing.",
    content: `
      <h2>Introduction</h2>
      <p>Next.js 14 brings revolutionary changes to how we build modern web applications. In this comprehensive guide, we'll explore the latest features and best practices for building scalable applications.</p>
      
      <h2>Server Components</h2>
      <p>Server Components are a game-changer for React applications. They allow you to render components on the server, reducing the JavaScript bundle size sent to the client and improving performance significantly.</p>
      
      <h3>Key Benefits:</h3>
      <ul>
        <li>Reduced bundle size</li>
        <li>Improved initial page load</li>
        <li>Better SEO performance</li>
        <li>Direct database access</li>
      </ul>
      
      <h2>App Router</h2>
      <p>The new App Router introduces a more intuitive way to handle routing in Next.js applications. With file-based routing and layouts, building complex applications becomes much simpler.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js 14 provides powerful tools for building modern web applications. By leveraging these features, you can create faster, more efficient applications that provide excellent user experiences.</p>
    `,
    coverImage: "https://www.commercient.com/wp-content/uploads/2024/08/Are-Blogs-Still-Relevant-in-the-Age-of-Artificial-Intelligence.jpg",
    author: {
      name: "Sanaullah Akhonzada",
      avatar: "/images/sana1.jpeg",
      role: "Full Stack Developer"
    },
    category: "Web Development",
    tags: ["Next.js", "React", "JavaScript", "Web Development"],
    readTime: "8 min read",
    publishedAt: "2024-01-15",
    featured: true,
    views: 2543,
    likes: 189
  },
  {
    id: "2",
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    slug: "mastering-typescript-advanced-patterns",
    excerpt: "Dive deep into advanced TypeScript patterns, generics, and type manipulation techniques to write more maintainable and type-safe code.",
    content: `
      <h2>Why TypeScript?</h2>
      <p>TypeScript has become the standard for building large-scale JavaScript applications. It provides type safety, better tooling, and improved developer experience.</p>
      
      <h2>Advanced Patterns</h2>
      <p>In this section, we'll explore advanced TypeScript patterns including generics, conditional types, and mapped types.</p>
      
      <h3>Generics</h3>
      <p>Generics allow you to write reusable code that works with multiple types while maintaining type safety.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use strict mode</li>
        <li>Leverage utility types</li>
        <li>Avoid 'any' type</li>
        <li>Use interfaces for object shapes</li>
      </ul>
    `,
    coverImage: "https://www.commercient.com/wp-content/uploads/2024/08/Are-Blogs-Still-Relevant-in-the-Age-of-Artificial-Intelligence.jpg",
    author: {
      name: "Sanaullah Akhonzada",
      avatar: "/images/avatar.jpg",
      role: "Full Stack Developer"
    },
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Programming", "Best Practices"],
    readTime: "10 min read",
    publishedAt: "2024-01-10",
    featured: true,
    views: 3421,
    likes: 256
  },
  {
    id: "3",
    title: "Modern CSS Techniques: From Grid to Container Queries",
    slug: "modern-css-techniques-grid-container-queries",
    excerpt: "Explore the latest CSS features including Grid Layout, Flexbox, Container Queries, and CSS Variables to create responsive and maintainable styles.",
    content: `
      <h2>The Evolution of CSS</h2>
      <p>CSS has evolved significantly over the years. Modern CSS provides powerful tools for creating complex layouts and responsive designs.</p>
      
      <h2>CSS Grid</h2>
      <p>CSS Grid revolutionized how we create layouts. It provides a two-dimensional layout system that makes complex designs simple.</p>
      
      <h2>Container Queries</h2>
      <p>Container queries allow components to adapt based on their container size rather than viewport size, enabling truly modular designs.</p>
      
      <h2>CSS Variables</h2>
      <p>Custom properties (CSS Variables) make it easy to maintain consistent theming and reduce code duplication.</p>
    `,
    coverImage: "https://www.commercient.com/wp-content/uploads/2024/08/Are-Blogs-Still-Relevant-in-the-Age-of-Artificial-Intelligence.jpg",
    author: {
      name: "Sanaullah Akhonzada",
      avatar: "/images/avatar.jpg",
      role: "Full Stack Developer"
    },
    category: "Design",
    tags: ["CSS", "Web Design", "Responsive Design", "Frontend"],
    readTime: "7 min read",
    publishedAt: "2024-01-05",
    featured: true,
    views: 1876,
    likes: 143
  },
  {
    id: "4",
    title: "Building RESTful APIs with Node.js and Express",
    slug: "building-restful-apis-nodejs-express",
    excerpt: "A comprehensive guide to building robust, scalable RESTful APIs using Node.js, Express, and MongoDB with authentication and best practices.",
    content: `
      <h2>Getting Started</h2>
      <p>Building RESTful APIs is a fundamental skill for backend developers. In this guide, we'll build a complete API from scratch.</p>
      
      <h2>Setting Up Express</h2>
      <p>Express is a minimal and flexible Node.js web application framework that provides robust features for web and mobile applications.</p>
      
      <h2>Database Integration</h2>
      <p>We'll integrate MongoDB for data persistence and learn best practices for database design.</p>
      
      <h2>Authentication</h2>
      <p>Implementing JWT-based authentication to secure your API endpoints.</p>
    `,
    coverImage: "https://www.commercient.com/wp-content/uploads/2024/08/Are-Blogs-Still-Relevant-in-the-Age-of-Artificial-Intelligence.jpg",
    author: {
      name: "Sanaullah Akhonzada",
      avatar: "/images/avatar.jpg",
      role: "Full Stack Developer"
    },
    category: "Backend",
    tags: ["Node.js", "Express", "API", "MongoDB"],
    readTime: "12 min read",
    publishedAt: "2023-12-28",
    featured: false,
    views: 2198,
    likes: 167
  },
  {
    id: "5",
    title: "State Management in React: Redux vs Context API",
    slug: "state-management-react-redux-context",
    excerpt: "Compare different state management solutions in React applications and learn when to use Redux, Context API, or other alternatives.",
    content: `
      <h2>Understanding State Management</h2>
      <p>State management is crucial for building complex React applications. Let's explore different approaches and their use cases.</p>
      
      <h2>Context API</h2>
      <p>React's built-in Context API is perfect for simple state sharing across components.</p>
      
      <h2>Redux</h2>
      <p>Redux provides a predictable state container with powerful debugging tools and middleware support.</p>
      
      <h2>When to Use What</h2>
      <p>Learn which solution fits your application's needs based on complexity and requirements.</p>
    `,
    coverImage: "https://www.commercient.com/wp-content/uploads/2024/08/Are-Blogs-Still-Relevant-in-the-Age-of-Artificial-Intelligence.jpg",
    author: {
      name: "Sanaullah Akhonzada",
      avatar: "/images/avatar.jpg",
      role: "Full Stack Developer"
    },
    category: "Frontend",
    tags: ["React", "Redux", "State Management", "JavaScript"],
    readTime: "9 min read",
    publishedAt: "2023-12-20",
    featured: false,
    views: 3012,
    likes: 234
  },
  {
    id: "6",
    title: "Docker and Kubernetes: Container Orchestration for Beginners",
    slug: "docker-kubernetes-container-orchestration",
    excerpt: "Learn the fundamentals of containerization with Docker and orchestration with Kubernetes to deploy scalable applications.",
    content: `
      <h2>Introduction to Containers</h2>
      <p>Containers have revolutionized how we deploy applications. Learn the basics of Docker and containerization.</p>
      
      <h2>Docker Basics</h2>
      <p>Understanding Docker images, containers, and how to create your own Dockerfiles.</p>
      
      <h2>Kubernetes Overview</h2>
      <p>Kubernetes is the industry-standard container orchestration platform. Learn about pods, services, and deployments.</p>
      
      <h2>Deployment Strategies</h2>
      <p>Explore different deployment strategies and best practices for production environments.</p>
    `,
    coverImage: "https://www.commercient.com/wp-content/uploads/2024/08/Are-Blogs-Still-Relevant-in-the-Age-of-Artificial-Intelligence.jpg",
    author: {
      name: "Sanaullah Akhonzada",
      avatar: "/images/avatar.jpg",
      role: "Full Stack Developer"
    },
    category: "DevOps",
    tags: ["Docker", "Kubernetes", "DevOps", "Deployment"],
    readTime: "15 min read",
    publishedAt: "2023-12-15",
    featured: false,
    views: 2765,
    likes: 198
  }
];