// Profile and Images
export const PROFILE_IMG = "src/assets/Picsart_26-01-08_21-07-32-700_i.png";
export const FAVICON = "src/assets/Slogo_color.png";

// Personal Information
export const NAME = "SWARNABHA HALDER";
export const EMAIL = "swarnabha@swarnabha.tech";
export const RESUME_URL = "/SWARNABHA%20HALDER_CV.pdf"; // URL encoded path to file in public folder

// Social Links
export const SOCIAL_LINKS = {
    github: "https://github.com/swarnabha-dev",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername"
};

// Tech Stack - Import ALL logos from logos folder
// To add a new tech: Just add the SVG file to src/components/logos/ and add it to index.js, then add here
import * as TechLogos from '../components/logos';

export const TECH_STACK = [
    // { Logo: TechLogos.SparkLogo, label: "Big Data" },
    { Logo: TechLogos.PythonLogo, label: "Python" },
    { Logo: TechLogos.TensorFlowLogo, label: "TensorFlow" },
    { Logo: TechLogos.DockerLogo, label: "Docker" },
    { Logo: TechLogos.AWSLogo, label: "Cloud" },
    { Logo: TechLogos.ReactLogo, label: "Frontend" },
    { Logo: "src/components/logos/bigdata.png", label: "Big Data" },
];


// Skills for Typewriter
export const SKILLS = ["Backend Architect", "Data Scientist", "AI Engineer", "Deep Learning", "Python Expert"];

// Languages for Preloader
export const LANGUAGES = [
    "Hello", "Bonjour", "Hola", "Ciao", "नमस्ते", "Olà", "নমস্কার", "Guten Tag", "Hallo", "Hello"
];

// Main Projects (Shown on Home)
export const PROJECTS = [
    {
        id: 1,
        title: "Neural Finance",
        type: "Fintech AI",
        year: "2025",
        description: "High-frequency trading prediction model utilizing LSTM networks to analyze market volatility in real-time. Achieved 24% reduction in latency compared to traditional models.",
        stack: ["Python", "TensorFlow", "React"],
        image: "src/assets/Picsart_26-01-08_21-07-32-700_i.png",
        screens: [
            "https://plus.unsplash.com/premium_photo-1681487552878-7324588399bb?q=80&w=1170&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2574&auto=format&fit=crop"
        ]
    },
    {
        id: 2,
        title: "Vision Core",
        type: "Computer Vision",
        year: "2024",
        description: "Edge-optimized object detection system for automated manufacturing quality control. Deployed on NVIDIA Jetson devices with custom quantization.",
        stack: ["YOLOv8", "C++", "FastAPI"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        screens: [
            "https://images.unsplash.com/photo-1535378437323-9555f374669e?q=80&w=2574&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1531297461136-82lw9z1p1j9d?q=80&w=2670&auto=format&fit=crop"
        ]
    },
    {
        id: 3,
        title: "Data Nexus",
        type: "Big Data",
        year: "2024",
        description: "Distributed pipeline orchestrator capable of handling 5PB+ of unstructured logs daily. Built with fault tolerance and automated scaling triggers.",
        stack: ["Spark", "Kafka", "AWS"],
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
        screens: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2574&auto=format&fit=crop"
        ]
    }
];

// Archive Projects (Shown in 'All Projects')
export const ARCHIVE_PROJECTS = [
    {
        id: 4,
        title: "Alpha Stream",
        type: "Data Pipeline",
        year: "2023",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2574&auto=format&fit=crop",
        description: "Real-time data streaming architecture for financial markets.",
        stack: ["Kafka", "Flink", "Redis"],
        screens: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2574&auto=format&fit=crop"]
    },
    {
        id: 5,
        title: "Nebula UI",
        type: "Design System",
        year: "2023",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        description: "Comprehensive design system for enterprise dashboards.",
        stack: ["React", "Storybook", "Figma"],
        screens: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"]
    },
    {
        id: 6,
        title: "Quant Ledger",
        type: "Blockchain",
        year: "2022",
        image: "https://images.unsplash.com/photo-1639322537228-ad7117a394bc?q=80&w=2600&auto=format&fit=crop",
        description: "Decentralized ledger for quantitative trading strategies.",
        stack: ["Solidity", "Web3.js", "Ethereum"],
        screens: ["https://images.unsplash.com/photo-1639322537228-ad7117a394bc?q=80&w=2600&auto=format&fit=crop"]
    },
    {
        id: 7,
        title: "Echo Voice",
        type: "NLP Model",
        year: "2022",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da9e2cd6?q=80&w=2670&auto=format&fit=crop",
        description: "Natural language processing model for sentiment analysis.",
        stack: ["Python", "PyTorch", "HuggingFace"],
        screens: ["https://images.unsplash.com/photo-1589254065878-42c9da9e2cd6?q=80&w=2670&auto=format&fit=crop"]
    },
];

// Main Research
export const RESEARCH = [
    {
        id: 'r1',
        title: "Generative Adversarial Networks",
        journal: "IEEE Transactions on AI",
        year: "2024",
        abstract: "Exploring the efficacy of GANs in simulating financial market scenarios for stress testing algorithmic trading strategies.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
        screens: [
            "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2574&auto=format&fit=crop"
        ]
    },
    {
        id: 'r2',
        title: "Optimizing Transformer Latency",
        journal: "NeurIPS Workshop",
        year: "2023",
        abstract: "A novel approach to pruning attention heads in transformer models to reduce inference time on edge devices without significant accuracy loss.",
        image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=2670&auto=format&fit=crop",
        screens: [
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2574&auto=format&fit=crop"
        ]
    }
];

// Extra Research (For 'All Research' View)
export const EXTRA_RESEARCH = [
    {
        id: 'r3',
        title: "Quantum Machine Learning",
        journal: "Nature Physics",
        year: "2022",
        abstract: "Investigating the potential of quantum circuits to outperform classical neural networks in specific classification tasks.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop",
        screens: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop"]
    },
    {
        id: 'r4',
        title: "Federated Learning Privacy",
        journal: "ACM CCS",
        year: "2022",
        abstract: "A comprehensive study on the vulnerability of federated learning systems to model inversion attacks and proposed mitigation strategies.",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2695&auto=format&fit=crop",
        screens: ["https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2695&auto=format&fit=crop"]
    }
];

// Combined Datasets
export const ALL_PROJECTS = [...PROJECTS, ...ARCHIVE_PROJECTS];
export const ALL_RESEARCH = [...RESEARCH, ...EXTRA_RESEARCH];
