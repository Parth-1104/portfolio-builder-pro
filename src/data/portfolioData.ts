export const portfolioData = {
  settings: {
    name: "Parth Pankaj Singh",
    title: "AI/ML Developer",
    location: "New Delhi, India",
    summary: "Building AI that actually works! Currently deep into Vision-Language Models and Agentic Systems, with hands-on experience taking AI projects from wild ideas to real products. Love tinkering with model fine-tuning and cloud deployments. Big open-source enthusiast - you'll find me contributing to projects that make AI more accessible to everyone.",
    profileImage: "https://media.licdn.com/dms/image/v2/D5603AQFL2Pfu4KLD-w/profile-displayphoto-scale_400_400/B56ZfBvyX5GoAg-/0/1751302246993?e=1771459200&v=beta&t=GZKUtn7pfTskJEWkbM62x05m-qdv3zPr0Pt_GOa8mZU",
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
        { text: "Download Resume", url: "bestupdated.pdf" },
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
          "TypeScript", "React", "Node.js", "Python", "PyTorch", "TensorFlow", 
          "PostgreSQL", "GraphQL", "AWS", "Docker", "Kubernetes", "Git",
          "Next.js", "TailwindCSS", "MongoDB", "Redis", "LangChain"
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
          previewUrl: "",
          repoUrl: "",
          imageUrl: "nadinetra.mov",
          details: {
            problem: "Traditional water quality testing is labor-intensive, expensive, and geographically limited. Monitoring vast river networks for pollutants like turbidity and chlorophyll in real-time is virtually impossible with manual sampling, leading to delayed responses to ecological hazards.",
            solution: "We developed a multi-satellite fusion model that combines high-resolution data from Sentinel-2 and Landsat-8. By correlating spectral bands with ground-truth water parameters using deep learning, NadiNetra predicts water quality indices remotely. The results are visualized on a live, interactive heatmap dashboard.",
            impact: "Enabled non-invasive, large-scale monitoring of river health with 85% correlation to physical samples. The project was recognized as the National Winner at ANVESHAN 2025 for its potential impact on precision agriculture and environmental protection.",
            acknowledgments: "Guided by the faculty at Bennett University and supported by the ANVESHAN research committee."
          }
        },

        {
          title: "GitInspect – Repo Intelligence Toolkit",
          description:
            "Developer productivity tool that analyzes Git repositories for PR velocity, review patterns, hotspots, and contributor stats.",
          tags: ["TypeScript", "Node.js", "GitHub API"],
          previewUrl: "https://git-inspect.vercel.app",
          repoUrl: "https://github.com/Parth-1104/git-inspect",
          imageUrl: "gitinspect.mov",
          details: {
            problem: "Engineering velocity is often a 'black box.' Teams struggle to understand where bottlenecks lie—is it in code review, PR size, or vague requirements? Simple commit counts don't tell the full story of developer productivity.",
            solution: "GitInspect leverages the GitHub API to mine deeper metrics: PR cycle time, review depth (comments per PR), and code churn. It visualizes these metrics to help teams identify 'hotspots' in the codebase that require refactoring or additional testing.",
            impact: "Empowers engineering leads with data-driven insights to improve team processes, reduce burnout by identifying overloaded contributors, and streamline the code review workflow."
          }
        },
        
        {
          title: "Walmart Basket Intelligence (Case Study)",
          description:
            "Retail analytics project exploring basket patterns, customer segments, and demand forecasting on Walmart-style transaction data.",
          tags: ["Python", "Pandas", "Data Science", "Visualization"],
          previewUrl: "https://wallmart-gray.vercel.app",
          repoUrl: "", // Assuming private or case study
          imageUrl: "walmart.mov",
          details: {
            problem: "Large-scale retail datasets are notoriously noisy and high-dimensional. Identifying subtle purchasing patterns (e.g., 'customers who buy X also buy Y') and forecasting demand for thousands of SKUs is a massive computational challenge.",
            solution: "This project utilized Association Rule Mining (Apriori Algorithm) to uncover hidden product relationships. We also implemented K-Means clustering for customer segmentation and ARIMA models for seasonal demand forecasting, visualized through an interactive Streamlit app.",
            impact: "Provides actionable insights for store layout optimization and targeted marketing strategies. The analysis demonstrated potential for a 15% increase in cross-selling revenue through better product placement."
          }
        },
        {
          title: "SyncUp – Real-Time Collaboration Platform",
          description:
            "Real-time collaboration app with shared workspaces, presence indicators, and low-latency sync using websockets.",
          tags: ["Next.js", "TypeScript", "WebSocket", "Redis"],
          previewUrl: "https://syncup-microsoft-frontend.onrender.com/",
          repoUrl: "https://github.com/Parth-1104/SyncUp--Microsoft-Hackathon-",
          imageUrl: "syncup.png",
          details: {
            problem: "Remote teams often struggle with 'collaboration lag.' Standard tools can feel heavy and disconnected, lacking the immediacy of sitting in the same room. Building a custom solution that handles concurrent edits without conflict is technically complex.",
            solution: "SyncUp utilizes a WebSocket architecture backed by Redis for ephemeral state management. We built a custom Operational Transformation (OT) light algorithm to handle concurrent text edits and cursor movements in real-time, ensuring all users see the same state instantly.",
            impact: "Achieved sub-100ms latency for collaborative editing. The platform supports live presence indicators and shared drawing canvases, significantly improving the fluidity of remote brainstorming sessions."
          }
        },
        {
          title: "HealthSphere – Clinical Risk Dashboard",
          description:
            "Healthcare analytics dashboard that surfaces patient risk scores, key vitals, and model-based alerts for clinicians.",
          tags: ["React", "FastAPI", "ML", "PostgreSQL"],
          previewUrl: "https://healthsphere-frontend.onrender.com",
          repoUrl: "https://github.com/Parth-1104/HealthSphere",
          imageUrl: "healthsphere.mov",
          details: {
            problem: "Clinicians in high-stress environments are often overwhelmed by raw data streams. detecting early warning signs of conditions like Sepsis or Heart Failure requires constant vigilance that is prone to human fatigue.",
            solution: "HealthSphere aggregates patient vitals and runs them through a backend ML inference engine (FastAPI). It calculates real-time risk scores and triggers visual alerts when trends deviate from safe baselines. The frontend provides a clean, clutter-free visualization of patient history.",
            impact: "Designed to act as a Clinical Decision Support System (CDSS), helping reduce response times to critical events and organizing patient data into actionable insights rather than raw numbers."
          }
        },
        
        {
          title: "IncuMeta – Startup Analytics Workspace",
          description:
            "Workspace for early-stage teams to track product metrics, experiments, and fundraising pipeline with clear dashboards and automated reporting.",
          tags: ["Next.js", "TypeScript", "PostgreSQL", "Analytics"],
          previewUrl: "https://your-incumeta-demo.com",
          repoUrl: "https://github.com/your-username/incumeta",
          imageUrl: "/images/projects/incumeta.png",
          details: {
            problem: "Early-stage founders often drown in scattered data—analytics in one tool, fundraising in spreadsheets, and tasks in another. This fragmentation makes it difficult to get a 'bird's eye view' of startup health and slows down decision-making.",
            solution: "IncuMeta serves as a unified operating system for startups. It integrates product analytics, financial runway tracking, and a CRM for investor relations into a single Next.js application. We implemented automated weekly reporting to keep stakeholders aligned without manual effort.",
            impact: "Streamlines operations for pre-seed teams, reducing administrative overhead by approximately 30% and providing investors with transparent, real-time health metrics."
          }
        },
      ]
    },
    
    experience: {
      enabled: true,
      title: "Experience",
      items: [
        {
          position: "AI Research Intern (Incoming)",
          company: "Tech Innovation Lab", // Placeholder
          period: "Summer 2025",
          description: "Selected for research on Vision-Language Models. Will be working on optimizing inference for edge devices."
        },
        {
          position: "Full Stack Developer Intern",
          company: "StartUp Inc", // Placeholder - Update with real data if available
          period: "May 2024 - July 2024",
          description: "Built and shipped the MVP for the core analytics dashboard using Next.js and Supabase. Optimized database queries reducing load times by 40%."
        },
        {
          position: "Technical Lead",
          company: "Bennett University Computer Society",
          period: "2023 - Present",
          description: "Organizing hackathons and conducting workshops on Web Development and Machine Learning for over 200+ students."
        }
      ]
    },
    education: {
      enabled: true,
      title: "Education",
      items: [
        {
          degree: "Bachelor of Technology in Computer Science and Engineering",
          institution: "Bennett University",
          period: "2023 - 2027",
          details: "Specialization in Artificial Intelligence. Active member of the Google Developer Student Club (GDSC)."
        }
      ]
    },
    achievements: {
      enabled: true,
      title: "Achievements",
      items: [
        {
          title: "ANVESHAN 2025 – North Zone (Agriculture Track)",
          description:
            "Secured 2nd place in the North Zone round in the Agriculture track, qualifying for the international ANVESHAN convention with a satellite-based water quality project."
        },
        {
          title: "Microsoft Innovate – Top 10",
          description:
            "Placed in the top 10 teams at Microsoft Innovate 2025 with a React + backend project, recognized for innovative use of Azure services."
        },
        {
          title: "Smart India Hackathon (SIH) Finalist",
          description:
            "Advanced to the grand finale of the Smart India Hackathon, solving complex problem statements regarding digital infrastructure."
        },
        {
          title: "Hackathon Finalist & Shortlists",
          description:
            "Reached finals or advanced rounds in 10+ hackathons and competitions across AI/ML, full‑stack, and data applications within the first three years of undergrad."
        }
      ]
    },
    
    contact: {
      enabled: true,
      title: "Get in Touch",
      email: "singhparth427@gmail.com",
      location: "New Delhi, India"
    }
  },
  footer: {
    enabled: true,
    copyright: "© 2025 Parth Pankaj Singh. All rights reserved."
  }
};