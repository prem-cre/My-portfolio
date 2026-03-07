// All projects data with categories and difficulty levels
export const allProjects = [
    // ===== FEATURED (shown on main page) =====
    {
        title: "Vibe - A MultiAgent No-code Website Generator",
        description:
            "An Advanced AI-powered SaaS platform for creating websites using Next.js, tRPC and Inngest for Agent Orchestration. It enables intelligent code generation, background task orchestration of multi-agents, and secure authentication. Featuring a premium, responsive glassmorphic user interface.",
        techStack: [
            "Next.js",
            "TypeScript",
            "tRPC",
            "Prisma",
            "PostgreSQL",
            "Inngest",
            "Clerk",
            "Gemini AI",
            "Tailwind CSS",
            "E2B Sandbox",
        ],
        githubLink: "https://github.com/prem-cre/Lovable-Advance-SaaS-project",
        demoLink: "https://lovable-advance-saa-s-project.vercel.app/home",
        image: "/winkchat.png",
        category: "AI/ML",
        difficulty: "Production System",
        featured: true,
    },
    {
        title: "Compliance-Aware LLM Writing Verification Engine",
        description:
            "A multi-stage retrieval and compliance pipeline that reduced hallucinated statements and improved writing quality with own user defined rules through reference validation, and hybrid RAG scoring.",
        techStack: [
            "Python",
            "Gemini AI",
            "LangGraph",
            "Streamlit",
            "Google File Search API",
            "Vector Database",
        ],
        githubLink: "https://github.com/prem-cre/compilance",
        demoLink: "https://prem-cre-compilance-app-f39dot.streamlit.app/",
        image: "/touristcompass.png",
        category: "AI/ML",
        difficulty: "Advanced",
        featured: true,
    },
    {
        title: "CoderBuddy (Lovable-clone-Minverse)",
        description:
            "CoderBuddy leverages Google Gemini AI and LangGraph's multi-agent architecture to transform text prompts into complete, working applications. Built with FastAPI and Next.js, it orchestrates specialized AI agents to plan, architect, and implement full-stack projects autonomously.",
        techStack: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "FastAPI",
            "LangChain",
            "LangGraph",
            "Google Gemini AI",
        ],
        githubLink: "https://github.com/prem-cre/lovable-clone",
        demoLink: "https://lovable-clone-lyart.vercel.app/",
        image: "/safestreets.png",
        category: "AI/ML",
        difficulty: "Production System",
        featured: true,
    },

    // ===== AI/ML PROJECTS =====
    {
        title: "Multimodal RAG System",
        description:
            "AI system that extracts text, tables, and images from documents using advanced retrieval-augmented generation. Supports multi-format document ingestion with intelligent chunking and hybrid search for precise answers.",
        techStack: [
            "Python",
            "LangChain",
            "ChromaDB",
            "Gemini AI",
            "Unstructured",
            "Streamlit",
        ],
        githubLink: "https://github.com/prem-cre/multimodal_RAG",
        demoLink: "",
        category: "AI/ML",
        difficulty: "Advanced",
        featured: false,
    },
    {
        title: "AI Comment Drafting Service",
        description:
            "A gRPC-based AI microservice that drafts intelligent code review comments using Gemini AI. Features intent detection, multi-agent routing, and compliance-aware text generation for enterprise code review workflows.",
        techStack: [
            "Python",
            "gRPC",
            "Gemini AI",
            "LangGraph",
            "Protobuf",
            "FastAPI",
        ],
        githubLink: "https://github.com/prem-cre/comment-drafting-service",
        demoLink: "",
        category: "AI/ML",
        difficulty: "Production System",
        featured: false,
    },
    {
        title: "AI-Powered Resume Analyzer",
        description:
            "An intelligent resume parsing and scoring system that uses NLP and LLMs to analyze resumes against job descriptions, providing compatibility scores, skill gap analysis, and actionable improvement suggestions.",
        techStack: [
            "Python",
            "Gemini AI",
            "Streamlit",
            "SpaCy",
            "PDF Parser",
            "Pandas",
        ],
        githubLink: "https://github.com/prem-cre/resume-analyzer",
        demoLink: "",
        category: "AI/ML",
        difficulty: "Intermediate",
        featured: false,
    },
    {
        title: "Sentiment Analysis Dashboard",
        description:
            "Real-time sentiment analysis platform that processes social media feeds and product reviews. Features interactive visualizations, trend tracking, and multi-language support with fine-tuned transformer models.",
        techStack: [
            "Python",
            "Transformers",
            "FastAPI",
            "React",
            "Chart.js",
            "PostgreSQL",
        ],
        githubLink: "https://github.com/prem-cre/sentiment-dashboard",
        demoLink: "",
        category: "AI/ML",
        difficulty: "Intermediate",
        featured: false,
    },
    {
        title: "Image Classification Pipeline",
        description:
            "End-to-end deep learning pipeline for image classification with transfer learning, data augmentation, and model optimization. Includes MLflow experiment tracking and automated model deployment.",
        techStack: [
            "Python",
            "PyTorch",
            "MLflow",
            "Docker",
            "FastAPI",
            "AWS S3",
        ],
        githubLink: "https://github.com/prem-cre/image-classifier",
        demoLink: "",
        category: "AI/ML",
        difficulty: "Advanced",
        featured: false,
    },

    // ===== BACKEND PROJECTS =====
    {
        title: "Microservices E-Commerce Platform",
        description:
            "A scalable e-commerce backend built with microservices architecture. Features service discovery, API gateway, event-driven communication, and distributed transaction management with saga pattern.",
        techStack: [
            "Node.js",
            "Express",
            "MongoDB",
            "RabbitMQ",
            "Redis",
            "Docker",
            "Kubernetes",
        ],
        githubLink: "https://github.com/prem-cre/ecommerce-microservices",
        demoLink: "",
        category: "Backend",
        difficulty: "Production System",
        featured: false,
    },
    {
        title: "Real-Time Chat Application",
        description:
            "Full-stack real-time messaging platform with WebSocket integration, message encryption, file sharing, and group chat support. Features typing indicators, read receipts, and push notifications.",
        techStack: [
            "Node.js",
            "Socket.io",
            "React",
            "MongoDB",
            "Redis",
            "JWT",
        ],
        githubLink: "https://github.com/prem-cre/realtime-chat",
        demoLink: "",
        category: "Backend",
        difficulty: "Advanced",
        featured: false,
    },
    {
        title: "RESTful API with Authentication",
        description:
            "Production-ready REST API with JWT-based authentication, role-based access control, rate limiting, request validation, and comprehensive Swagger documentation. Follows clean architecture principles.",
        techStack: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "SQLAlchemy",
            "JWT",
            "Docker",
        ],
        githubLink: "https://github.com/prem-cre/rest-api-auth",
        demoLink: "",
        category: "Backend",
        difficulty: "Intermediate",
        featured: false,
    },
    {
        title: "GraphQL Blog API",
        description:
            "A modern blog backend built with GraphQL featuring real-time subscriptions, nested resolvers, DataLoader for N+1 query optimization, and cursor-based pagination with caching layers.",
        techStack: [
            "Node.js",
            "Apollo Server",
            "GraphQL",
            "Prisma",
            "PostgreSQL",
            "Redis",
        ],
        githubLink: "https://github.com/prem-cre/graphql-blog",
        demoLink: "",
        category: "Backend",
        difficulty: "Intermediate",
        featured: false,
    },
    {
        title: "Task Queue Worker System",
        description:
            "Distributed task processing system with priority queues, retry mechanisms, dead letter handling, and real-time monitoring dashboard. Handles background job processing at scale with graceful shutdown.",
        techStack: [
            "Python",
            "Celery",
            "Redis",
            "Flask",
            "PostgreSQL",
            "Prometheus",
        ],
        githubLink: "https://github.com/prem-cre/task-queue",
        demoLink: "",
        category: "Backend",
        difficulty: "Advanced",
        featured: false,
    },

    // ===== DEVOPS PROJECTS =====
    {
        title: "CI/CD Pipeline with GitHub Actions",
        description:
            "Automated CI/CD pipeline with multi-stage builds, automated testing, security scanning, container image building, and blue-green deployments to Kubernetes clusters with rollback capability.",
        techStack: [
            "GitHub Actions",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Helm",
            "ArgoCD",
        ],
        githubLink: "https://github.com/prem-cre/cicd-pipeline",
        demoLink: "",
        category: "DevOps",
        difficulty: "Advanced",
        featured: false,
    },
    {
        title: "Infrastructure as Code - AWS",
        description:
            "Complete AWS infrastructure provisioned using Terraform with modules for VPC, ECS, RDS, ElastiCache, and CloudFront. Includes state management, drift detection, and cost optimization strategies.",
        techStack: [
            "Terraform",
            "AWS",
            "CloudFormation",
            "Python",
            "Ansible",
            "Packer",
        ],
        githubLink: "https://github.com/prem-cre/iac-aws",
        demoLink: "",
        category: "DevOps",
        difficulty: "Production System",
        featured: false,
    },
    {
        title: "Kubernetes Cluster Monitoring",
        description:
            "Comprehensive monitoring stack for Kubernetes with custom dashboards, alerting rules, log aggregation, and distributed tracing. Features auto-scaling policies and resource optimization recommendations.",
        techStack: [
            "Kubernetes",
            "Prometheus",
            "Grafana",
            "Loki",
            "Jaeger",
            "Helm",
        ],
        githubLink: "https://github.com/prem-cre/k8s-monitoring",
        demoLink: "",
        category: "DevOps",
        difficulty: "Advanced",
        featured: false,
    },
    {
        title: "Docker Compose Development Environment",
        description:
            "Containerized development environment with hot-reload, shared volumes, service mesh networking, and automated database seeding. Supports multiple service configurations for different development scenarios.",
        techStack: [
            "Docker",
            "Docker Compose",
            "Nginx",
            "PostgreSQL",
            "Redis",
            "Makefile",
        ],
        githubLink: "https://github.com/prem-cre/docker-dev-env",
        demoLink: "",
        category: "DevOps",
        difficulty: "Intermediate",
        featured: false,
    },
    {
        title: "GitOps Deployment Pipeline",
        description:
            "GitOps-driven deployment workflow using ArgoCD and Flux for declarative infrastructure management. Features automated sync, health checks, progressive delivery with canary deployments, and audit trails.",
        techStack: [
            "ArgoCD",
            "Flux",
            "Kubernetes",
            "Helm",
            "Kustomize",
            "GitHub Actions",
        ],
        githubLink: "https://github.com/prem-cre/gitops-pipeline",
        demoLink: "",
        category: "DevOps",
        difficulty: "Production System",
        featured: false,
    },

    // ===== DATA SCIENCE PROJECTS =====
    {
        title: "Customer Churn Prediction",
        description:
            "End-to-end ML pipeline for predicting customer churn using ensemble methods. Features automated feature engineering, SHAP-based explainability, A/B testing framework, and real-time prediction API.",
        techStack: [
            "Python",
            "Scikit-learn",
            "XGBoost",
            "SHAP",
            "Pandas",
            "Streamlit",
        ],
        githubLink: "https://github.com/prem-cre/churn-prediction",
        demoLink: "",
        category: "Data Science",
        difficulty: "Advanced",
        featured: false,
    },
    {
        title: "Sales Forecasting Dashboard",
        description:
            "Time-series forecasting system for retail sales with Prophet and LSTM models. Features interactive dashboards, anomaly detection, seasonal decomposition, and automated report generation.",
        techStack: [
            "Python",
            "Prophet",
            "TensorFlow",
            "Plotly",
            "Dash",
            "PostgreSQL",
        ],
        githubLink: "https://github.com/prem-cre/sales-forecast",
        demoLink: "",
        category: "Data Science",
        difficulty: "Advanced",
        featured: false,
    },
    {
        title: "Exploratory Data Analysis Toolkit",
        description:
            "Automated EDA toolkit that generates comprehensive data quality reports, statistical summaries, correlation analysis, and interactive visualizations from any tabular dataset with minimal configuration.",
        techStack: [
            "Python",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "Jupyter",
            "Streamlit",
        ],
        githubLink: "https://github.com/prem-cre/eda-toolkit",
        demoLink: "",
        category: "Data Science",
        difficulty: "Intermediate",
        featured: false,
    },
    {
        title: "Recommendation Engine",
        description:
            "Hybrid recommendation system combining collaborative filtering and content-based approaches. Features cold-start handling, real-time personalization, and A/B testing framework for recommendation quality evaluation.",
        techStack: [
            "Python",
            "Surprise",
            "TensorFlow",
            "FastAPI",
            "Redis",
            "MongoDB",
        ],
        githubLink: "https://github.com/prem-cre/recommendation-engine",
        demoLink: "",
        category: "Data Science",
        difficulty: "Advanced",
        featured: false,
    },
    {
        title: "Data Pipeline with Apache Airflow",
        description:
            "Automated data pipeline orchestrated by Apache Airflow for ETL operations. Features data quality checks, schema validation, incremental loads, and alerting on pipeline failures with retry mechanisms.",
        techStack: [
            "Python",
            "Apache Airflow",
            "PostgreSQL",
            "AWS S3",
            "Docker",
            "Pandas",
        ],
        githubLink: "https://github.com/prem-cre/data-pipeline",
        demoLink: "",
        category: "Data Science",
        difficulty: "Production System",
        featured: false,
    },
];

// Get only featured projects (for main page)
export const featuredProjects = allProjects.filter((p) => p.featured);

// Get all unique categories
export const categories = [
    "All",
    ...new Set(allProjects.map((p) => p.category)),
];

// Get project counts by category
export const getCategoryStats = () => {
    const stats = {};
    allProjects.forEach((p) => {
        stats[p.category] = (stats[p.category] || 0) + 1;
    });
    return {
        total: allProjects.length,
        ...stats,
    };
};
