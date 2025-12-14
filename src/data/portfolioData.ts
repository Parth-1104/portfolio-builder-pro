export const portfolioData = {
  settings: {
    name: "Parth Pankaj Singh",
    title: "AI/ML Developer ",
    location: "New Delhi, India",
    summary: "Building AI that actually works! Currently deep into Vision-Language Models and Agentic Systems, with hands-on experience taking AI projects from wild ideas to real products. Love tinkering with model fine-tuning and cloud deployments. Big open-source enthusiast - you'll find me contributing to projects that make AI more accessible to everyone.",
    profileImage: "https://media.licdn.com/dms/image/v2/D5603AQFL2Pfu4KLD-w/profile-displayphoto-scale_400_400/B56ZfBvyX5GoAg-/0/1751302246993?e=1767225600&v=beta&t=GniNwoqOTlB2-qcKDuxc7mwxMglVRPI-PlnJQQN94C8",
    email: "singhparth427@gmail.com",
    github: "https://www.github.com/Parth-1104",
    linkedin: "https://www.linkedin.com/in/parth-singh427/",
    twitter: "https://x.com/parallelyparth",
    resume: "bestupdated.pdf"
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
        { platform: "linkedin", url: "https://www.linkedin.com/in/parth-singh427/" },
        { platform: "github", url: "https://www.github.com/Parth-1104" },
        { platform: "twitter", url: "https://x.com/parallelyparth" }
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
          title: "NadiNetra – Multisatellite Water Quality Monitoring",
          description:
            "End-to-end system fusing Sentinel‑2 and Landsat‑8 data to predict TSS, turbidity, and chlorophyll, with an interactive dashboard for river health insights. ANVESHAN national winner in Agriculture AI.",
          tags: ["Python", "Satellite Imagery", "Deep Learning", "MLOps"],
          previewUrl: "https://your-nadinetra-demo.com",
          repoUrl: "https://github.com/your-username/nadinetra",
          imageUrl: "/images/projects/nadinetra.png"
        },
        {
          title: "IncuMeta – Startup Analytics Workspace",
          description:
            "Workspace for early-stage teams to track product metrics, experiments, and fundraising pipeline with clear dashboards and automated reporting.",
          tags: ["Next.js", "TypeScript", "PostgreSQL", "Analytics"],
          previewUrl: "https://your-incumeta-demo.com",
          repoUrl: "https://github.com/your-username/incumeta",
          imageUrl: "/images/projects/incumeta.png"
        },
        {
          title: "Walmart Basket Intelligence (Case Study)",
          description:
            "Retail analytics project exploring basket patterns, customer segments, and demand forecasting on Walmart-style transaction data.",
          tags: ["Python", "Pandas", "Data Science", "Visualization"],
          previewUrl: "",
          repoUrl: "https://github.com/your-username/walmart-analytics",
          imageUrl: "/images/projects/walmart.png"
        },
        {
          title: "SyncUp – Real-Time Collaboration Platform",
          description:
            "Real-time collaboration app with shared workspaces, presence indicators, and low-latency sync using websockets.",
          tags: ["Next.js", "TypeScript", "WebSocket", "Redis"],
          previewUrl: "https://your-syncup-demo.com",
          repoUrl: "https://github.com/your-username/syncup",
          imageUrl: "/images/projects/syncup.png"
        },
        {
          title: "HealthSphere – Clinical Risk Dashboard",
          description:
            "Healthcare analytics dashboard that surfaces patient risk scores, key vitals, and model-based alerts for clinicians.",
          tags: ["React", "FastAPI", "ML", "PostgreSQL"],
          previewUrl: "https://your-healthsphere-demo.com",
          repoUrl: "https://github.com/your-username/healthsphere",
          imageUrl: "/images/projects/healthsphere.png"
        },
        {
          title: "GitInspect – Repo Intelligence Toolkit",
          description:
            "Developer productivity tool that analyzes Git repositories for PR velocity, review patterns, hotspots, and contributor stats.",
          tags: ["TypeScript", "Node.js", "GitHub API"],
          previewUrl: "",
          repoUrl: "https://github.com/your-username/gitinspect",
          imageUrl: "/images/projects/gitinspect.png"
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
        // {
        //   position: "Full Stack Developer",
        //   company: "StartupXYZ",
        //   period: "2020 - 2022",
        //   description: "Built and maintained core product features, implemented CI/CD pipelines, and reduced deployment time by 60%."
        // },
        // {
        //   position: "Software Developer",
        //   company: "Digital Agency",
        //   period: "2018 - 2020",
        //   description: "Developed custom web applications for clients across various industries, focusing on performance and user experience."
        // }
      ]
    },
    education: {
      enabled: true,
      title: "Education",
      items: [
        {
          degree: "Bachelor of Technology in Computer Science and Engineering",
          institution: "Bennett University",
          period: "2023 - 2027"
        }
      ]
    },
    achievements: {
      enabled: true,
      title: "Achievements",
      items: [
        // {
        //   title: "ANVESHAN 2025 – Agriculture Track (International Convention)",
        //   description:
        //     "Won the national round in the Agriculture track at AIU ANVESHAN 2025 (international student research convention) for NadiNetra, a multisatellite water quality monitoring system hosted at GB Pant University."
        // },
        {
          title: "ANVESHAN 2025 – North Zone (Agriculture Track)",
          description:
            "Secured 2nd place in the North Zone round in the Agriculture track, qualifying for the international ANVESHAN convention with a satellite-based water quality project."
        },
        {
          title: "Microsoft Innovate – Top 10",
          description:
            "Placed in the top 10 teams at Microsoft Innovate 2025 with a React + backend project, built by cloning and iterating on real-world app patterns from YouTube."
        },
        {
          title: "Hackathon Finalist & Shortlists",
          description:
            "Reached finals or advanced rounds in 10+ hackathons and competitions across AI/ML, full‑stack, and data applications within the first three years of undergrad."
        },
        // {
        //   title: "100xDevs Cohort – Full-Stack Track",
        //   description:
        //     "Completed intensive 100xDevs full‑stack cohort sessions under Harkirat Singh, building production-style Next.js and backend projects with an emphasis on shipping."
        // }
      ]
    },
    
    contact: {
      enabled: true,
      title: "Get in Touch",
      email: "singhparth427@gmail.com",
      // phone: "+1 (555) 123-4567",
      location: "New Delhi, India"
    }
  },
  footer: {
    enabled: true,
    copyright: "© 2025 Parth Pankaj Singh. All rights reserved."
  }
};
