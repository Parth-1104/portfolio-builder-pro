export const portfolioData = {
  settings: {
    name: "Parth Pankaj Singh",
    title: "Full Stack Developer",
    location: "San Francisco, CA",
    summary: "I'm a passionate developer with expertise in building modern web applications. I love creating elegant solutions to complex problems and am constantly exploring new technologies to stay at the cutting edge of development.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  navigation: {
    enabled: true,
    items: [
      { name: "About", url: "#about" },
      { name: "Projects", url: "#projects" },
      { name: "Experience", url: "#experience" },
      { name: "Contact", url: "#contact" }
    ]
  },
  sections: {
    hero: {
      enabled: true,
      ctaButtons: [
        { text: "Download Resume", url: "#" },
        { text: "Get in Touch", url: "#contact" }
      ]
    },
    social: {
      enabled: true,
      items: [
        { platform: "linkedin", url: "linkedin.com/in/parthsingh" },
        { platform: "github", url: "github.com/parthsingh" },
        { platform: "twitter", url: "twitter.com/parthsingh" }
      ]
    },
    about: {
      enabled: true,
      skills: {
        enabled: true,
        title: "Skills & Technologies",
        items: [
          "TypeScript", "React", "Node.js", "Python", "PostgreSQL", 
          "GraphQL", "AWS", "Docker", "Kubernetes", "Git",
          "Next.js", "TailwindCSS", "MongoDB", "Redis", "CI/CD"
        ]
      }
    },
    projects: {
      enabled: true,
      title: "Projects",
      items: [
        {
          title: "E-Commerce Platform",
          description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.",
          tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
          previewUrl: "https://example.com",
          repoUrl: "https://github.com/example/ecommerce"
        },
        {
          title: "Task Management App",
          description: "Collaborative task management application with real-time updates, team workspaces, and productivity analytics.",
          tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
          previewUrl: "https://example.com",
          repoUrl: "https://github.com/example/taskapp"
        },
        {
          title: "AI Content Generator",
          description: "An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy.",
          tags: ["Python", "OpenAI", "FastAPI", "React"],
          previewUrl: "",
          repoUrl: "https://github.com/example/ai-content"
        },
        {
          title: "Developer Portfolio",
          description: "A customizable portfolio template for developers with dark mode, animations, and CMS integration.",
          tags: ["React", "TailwindCSS", "Framer Motion"],
          previewUrl: "https://example.com",
          repoUrl: ""
        }
      ]
    },
    experience: {
      enabled: true,
      title: "Experience",
      items: [
        {
          position: "Senior Software Engineer",
          company: "Tech Corp",
          period: "2022 - Present",
          description: "Leading development of microservices architecture, mentoring junior developers, and driving best practices across the engineering team."
        },
        {
          position: "Full Stack Developer",
          company: "StartupXYZ",
          period: "2020 - 2022",
          description: "Built and maintained core product features, implemented CI/CD pipelines, and reduced deployment time by 60%."
        },
        {
          position: "Software Developer",
          company: "Digital Agency",
          period: "2018 - 2020",
          description: "Developed custom web applications for clients across various industries, focusing on performance and user experience."
        }
      ]
    },
    education: {
      enabled: true,
      title: "Education",
      items: [
        {
          degree: "Master of Science in Computer Science",
          institution: "Stanford University",
          period: "2016 - 2018"
        },
        {
          degree: "Bachelor of Science in Software Engineering",
          institution: "UC Berkeley",
          period: "2012 - 2016"
        }
      ]
    },
    achievements: {
      enabled: true,
      title: "Achievements",
      items: [
        {
          title: "AWS Certified Solutions Architect",
          description: "Professional level certification demonstrating expertise in designing distributed systems on AWS."
        },
        {
          title: "Open Source Contributor",
          description: "Active contributor to popular open source projects with over 500+ GitHub stars on personal projects."
        }
      ]
    },
    contact: {
      enabled: true,
      title: "Get in Touch",
      email: "parth@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA"
    }
  },
  footer: {
    enabled: true,
    copyright: "© 2024 Parth Pankaj Singh. All rights reserved."
  }
};
