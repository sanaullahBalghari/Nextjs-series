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
    title: "GBGreenGuide",
    slug: "GBGreenGuide",
    shortDescription: "GBGreenGuide is a web-based Full stack  sustainable tourism platform designed for Gilgit-Baltistan.The project aims to promote eco-friendly tourism by connecting tourists with local businesses and providing reliable, location-based travel information.",
    fullDescription: "GBGreenGuide is a web-based and Progressive Web Application (PWA) designed for sustainable tourism in Gilgit-Baltistan.The project aims to promote eco-friendly tourism by connecting tourists with local businesses and providing reliable, location-based travel information through both web and app-like experiences.Tourists can explore cities, tourist attractions, events, restaurants, and local products, while business owners can showcase and manage their services on the platform.The application supports PWA features, allowing users to install it on their devices for a smooth, app-like experience.An AI-powered chatbot is integrated to assist users with instant travel guidance and general travel-related queries.",
    image: "/images/gbgreen.png",
    category: "Full Stack",
    technologies: ["React", "Python", "Django", "REST API", "TailwindCSS", "n8n"],
    features: [
      "City-wise tourism guide for Gilgit-Baltistan",
      "Tourist places, events, and restaurants listing",
      "Role-based authentication (Tourist & Business Owner)",
      "Local product listing and booking system",
      "AI-powered chatbot for travel assistance",
      "Secure JWT cookie-based authentication",
      "Responsive and mobile-friendly UI"
    ],
    liveUrl: "https://github.com/sanaullahBalghari/gb-green-guide-frontend",
    githubUrl: "https://github.com/sanaullahBalghari/gb_green_guide_backend",
    date: "2024-07",
    featured: true,
    stats: {
      performance: "98%",
     
    }
  },
  {
    id: "2",
    title: "MysteryMessage – Anonymous Messaging Platform with AI Suggestions",
    slug: "MysteryMessage",
    shortDescription: "MysteryMessage is a web-based platform that allows users to send and receive anonymous messages in a secure and user-friendly environment.",
    fullDescription: "MysteryMessage is a web-based platform that allows users to send and receive anonymous messages in a secure and user-friendly environment.The project integrates AI-powered message suggestions, enabling users to generate creative, thoughtful, or engaging messages with ease.Users can send anonymous messages through a dedicated send page, where AI assists in crafting messages for a smooth and interactive experience.A personalized dashboard allows users to manage incoming messages and control their availability.",
    image: "/images/mstry.png",
    category: "Full Stack",
    technologies: ["React", "Next js", "TypeScript", "Aceternity UI", "Tailwindcss","Vercel"],
    features: [
      "Anonymous Message Sending",
      "AI-Powered Message Suggestions",
      "Interactive Send Message Page",
      "User Dashboard for Message Management",
      "Receive Messages with Total Count Display",
      "Toggle Message Acceptance (On / Off)"
    ],
    liveUrl: "https://mysterymessages-nextjs.vercel.app/",
    githubUrl: "https://github.com/sanaullahBalghari/Nextjs-series/tree/main/mystery-messages",
    date: "2023-11",
    featured: true,
    stats: {
     
      performance: "95%",
     
    }
  },
  {
    id: "3",
    title: "WordAtlas – Country Explorer",
    slug: "WordAtlas-Countr- Explorer",
    shortDescription: "WordAtlas is a React-based web application that explores countries from all over the world by fetching real-time data from a public API.",
    fullDescription: "WordAtlas is a React-based web application that explores countries from all over the world by fetching real-time data from a public API.The application displays detailed country information such as country name, facts, and other key details in a clean and user-friendly interface.The project focuses on API integration, dynamic data rendering, and responsive UI design using modern frontend technologies.",
    image: "/images/world.jpg",
    category: "Full Stack",
    technologies: ["Next.js", "OpenAI API", "PostgreSQL", "TailwindCSS", "Vercel"],
    features: [
      "Explore Countries Worldwide",
      "Public API Integration for Real-Time Data",
      "Country Details (name, facts, and related information)",
      "Dynamic Data Fetching & Rendering",
      "Modern UI using Tailwind CSS",
      
    ],
    liveUrl: "https://gentle-pika-1c7d97.netlify.app/",
    githubUrl: "https://github.com/sanaullahBalghari/React-wordAltas-country-explorer",
    date: "2024-02",
    featured: true,
    stats: {
     
      performance: "99%",
      
    }
  },
  {
    id: "4",
    title: "Frontend E-Commerce Shopping Website",
    slug: "E-Commerce",
    shortDescription: "ShopEase is a frontend-only e-commerce shopping website built using HTML, CSS, and JavaScript.",
    fullDescription: "ShopEase is a frontend-only e-commerce shopping website built using HTML, CSS, and JavaScript.The project replicates the core features of a typical online shopping platform, focusing on UI/UX design, user interaction, and client-side functionality.This project demonstrates how a complete e-commerce user experience can be created on the frontend without backend integration.",
    image: "/images/ecom.jpg",
    category: "Frontend",
    technologies: ["Html", "Css", "javascript", "Bootstrap"],
    features: [
      "Product Listing Page",
      "Product Details View",
      "Add to Cart Functionality",
      "Cart Item Quantity Management",
      "Fully Responsive Design",
     
    ],
    liveUrl: "https://github.com/sanaullahBalghari/Front-End-Ecommerce-Website",
    githubUrl: "https://github.com/sanaullahBalghari/Front-End-Ecommerce-Website",
    date: "2023-09",
    featured: true,
    stats: {
    
      performance: "97%",
    
    }
  },
 
  {
    id: "6",
    title: "Ecom-Salajeet-Store",
    slug: "Ecom-Salajeet-Store",
    shortDescription: "Ecom-Salajeet-Store is a complete, responsive e-commerce website built for selling Blaghari Himalayan Salajeet and Dry Fruits.",
    fullDescription: "Ecom-Salajeet-Store is a complete, responsive e-commerce website built for selling Blaghari Himalayan Salajeet and Dry Fruits.The platform allows users to browse products, add items to cart, place orders, and manage purchases seamlessly.This project includes frontend built with HTML, CSS, and Bootstrap, and backend functionality using Django and JavaScript, providing a fully functional shopping experience with order management.",
    image: "/images/Powder.webp",
    category: "Full Stack",
    technologies: ["Html", "Css", "Bootstrap", "javascript", "Django","Python"],
    features: [
      "Product Listing Page",
      "Product Details View",
      "Add to Cart Functionality",
      "Order Placement & Checkout",
      "Cart Item Quantity Management",
      "Fully Responsive Design",
      "User Registration & Authentication",
      "Dynamic Backend with Django"
    ],
    liveUrl: "https://github.com/sanaullahBalghari/Ecom-salajeet-store",
    githubUrl: "https://github.com/sanaullahBalghari/Ecom-salajeet-store",
    date: "2024-01",
    featured: true,
    stats: {
    
      performance: "94%",
      
    }
  },
  {
    id: "7",
    title: "DjangoRecipes",
    slug: "Recipes",
    shortDescription: "DjangoRecipes is a Django-based web application that allows users to add, delete, and update recipes easily Foucs on Django CURD Operations.",
    fullDescription: "DjangoRecipes is a Django-based web application that allows users to add, delete, and update recipes easily.The platform focuses on providing a clean, user-friendly interface for managing and exploring recipes, making it simple for users to organize and share cooking ideas.",
    image: "/images/recipe.webp",
    category: "Backend",
    technologies: ["Html", "Css", "Bootstrap", "javascript", "Django","Python"],
    features: [
      "Add New Recipes",
      "Edit / Update Existing Recipes",
      "Delete Recipes",
      "View Recipe Details",
      
    ],
    liveUrl: "https://github.com/sanaullahBalghari/Django-Res-Recepie-project",
    githubUrl: "https://github.com/sanaullahBalghari/Django-Res-Recepie-project",
    date: "2023-04",
    featured: true,
    stats: {
    
      performance: "94%",
      
    }
  },
 {
  id: "8",
  title: "MiniYouTube",
  slug: "MiniYouTube",
  shortDescription: "MiniYouTube is a Node.js & MongoDB backend project implementing user authentication and basic video platform features, including video upload, CRUD operations, and like/dislike functionality.",
  fullDescription: "MiniYouTube is a backend-only video sharing platform built with Node.js and MongoDB. Users can register, authenticate, and interact with video content through RESTful APIs. The project demonstrates CRUD operations for videos, like/dislike functionality, and secure JWT-based authentication, showcasing a scalable backend architecture for a video sharing application.",
  image: "/images/api-2.webp",
  category: "Backend",
  technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JavaScript", "JWT"],
  features: [
    "User Registration & Authentication",
    "Video Upload Management",
    "CRUD Operations for Videos",
    "Like / Dislike Video Functionality",
    "View Video Details",
    "User-Specific Video Management",
    "RESTful API Design",
    "MongoDB Database Integration"
  ],
  liveUrl: "https://github.com/sanaullahBalghari/Nodejs-project",
  githubUrl: "https://github.com/sanaullahBalghari/Nodejs-project",
  date: "2024-08",
  featured: true,
  stats: {
    performance: "95%"
  }
},
{
  id: "9",
  title: "AI Email Analyzer & Auto Draft System",
  slug: "ai-email-analyzer-n8n",
  shortDescription: "An AI-powered email automation system built with n8n and Gemini Chat Model that classifies incoming emails and automatically generates smart reply drafts based on intent.",
  fullDescription: "AI Email Analyzer & Auto Draft System is an intelligent email automation workflow built using n8n and Gemini Chat Model. The system automatically detects new incoming emails, analyzes their content, and classifies them into categories such as Inquiry, Order, or Urgent. Based on the classification, an AI agent generates context-aware and professional email replies. For order-related emails, the system automatically creates a reply and saves it as a Gmail draft, enabling efficient human review before sending. This project demonstrates practical AI integration, workflow automation, and real-world business email handling.",
  image: "/images/see.png",
  category: "AI/Automation",
  technologies: [
    "n8n",
    "Gemini Chat Model",
    "AI Agents",
    "Email Automation",
    "Gmail API",
    "JavaScript",
    "Prompt Engineering"
  ],
  features: [
    "Automatic Email Trigger & Parsing",
    "AI-Based Email Classification (Inquiry, Order, Urgent)",
    "Intent Detection Using Gemini Chat Model",
    "Category-Specific AI Agents",
    "Automated Reply Generation for Orders",
    "Auto-Save Replies as Gmail Drafts",
    "Manual Review Before Sending Emails",
    "Scalable No-Code / Low-Code Workflow",
    "Real-World Business Email Use Case"
  ],
  liveUrl: "",
  githubUrl: "",
  date: "2025-01",
  featured: true,
  stats: {
      performance: "92%"
  }
},

{
  id: "10",
  title: "AI Smart Guide Chatbot",
  slug: "ai-smart-guide-chatbot",
  shortDescription: "An AI-powered chatbot built with n8n and Gemini Chat Model that answers user queries using real website data through API-based tool calling and smart recommendations.",
  fullDescription: "AI Smart Guide Chatbot is an intelligent conversational assistant developed using n8n and Gemini Chat Model. The chatbot is connected to multiple website APIs as AI tools, enabling it to fetch real-time and structured data directly from the platform. Based on user queries, the chatbot dynamically decides which API to call and generates accurate, context-aware responses. It can provide detailed city information, recommend products (best or cheapest), and suggest restaurants by analyzing user budget and available options on the website. This project demonstrates advanced AI tool-calling, workflow automation, and real-world data-driven conversational AI.",
  image: "/images/chatbot.png",
  category: "AI/Automation",
  technologies: [
    "n8n",
    "Gemini Chat Model",
    "AI Tool Calling",
    "REST APIs",
    "JavaScript",
    "Prompt Engineering",
    "Workflow Automation"
  ],
  features: [
    "AI Chatbot with Natural Language Understanding",
    "Dynamic API Selection Based on User Queries",
    "Website APIs Integrated as AI Tools",
    "City Information Retrieval from Live Data",
    "Smart Product Recommendations (Best & Cheapest)",
    "Budget-Based Restaurant Suggestions",
    "Context-Aware Multi-Turn Conversations",
    "Real Data-Driven Responses (No Static Answers)",
    "Scalable and Modular n8n Workflow"
  ],
  liveUrl: "",
  githubUrl: "",
  date: "2025-01",
  featured: true,
  stats: {
     performance: "93%"
  }
},



];