import { LucideIcon } from 'lucide-react';

export interface CourseModule {
    title: string;
    topics: string[];
    duration: string;
}

export interface CourseProject {
    title: string;
    description: string;
    technologies: string[];
}

export interface CourseFAQ {
    question: string;
    answer: string;
}

export interface CourseCareer {
    title: string;
    description: string;
    salary: string;
}

export type CourseIconName = 'Brain' | 'Database' | 'Code2' | 'Cloud' | 'Shield';

export interface CourseData {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    heroVideo: string;
    heroBackground: string;
    iconName: CourseIconName;
    mentor: {
        name: string;
        title: string;
        experience: string;
        image: string;
        bio: string;
    };
    duration: string;
    level: string;
    skills: string[];
    projects: CourseProject[];
    careers: CourseCareer[];
    syllabus: CourseModule[];
    faqs: CourseFAQ[];
}

export const coursesData: CourseData[] = [
    {
        slug: 'ai-engineer',
        title: 'AI Engineer Program',
        subtitle: 'Master Generative AI, LLMs, AI Agents & AI Automation',
        description: 'Become an AI Engineer by mastering Generative AI, Large Language Models, AI Agents, LangChain, Prompt Engineering, RAG, and real-world AI automation. Build production-ready AI applications.',
        heroVideo: '/videos/courses/ai-engineer-hero.mp4',
        heroBackground: 'linear-gradient(135deg, rgba(122, 0, 25, 0.9), rgba(12, 8, 10, 0.95))',
        iconName: 'Brain',
        mentor: {
            name: 'Dr. Rajesh Kumar',
            title: 'AI Research Scientist',
            experience: '15+ Years in AI & Machine Learning',
            image: '/images/mentors/ai-mentor.jpg',
            bio: 'Former Google AI Researcher with expertise in LLMs, Deep Learning, and AI Agents. Published 20+ papers in top AI conferences.',
        },
        duration: '6 Months',
        level: 'Intermediate to Advanced',
        skills: [
            'Generative AI',
            'Large Language Models',
            'Prompt Engineering',
            'LangChain',
            'RAG Systems',
            'AI Agents',
            'Python for AI',
            'TensorFlow',
            'Hugging Face',
            'FastAPI',
            'Vector Databases',
            'AI Deployment',
        ],
        projects: [
            {
                title: 'AI-Powered Chatbot with RAG',
                description: 'Build an intelligent chatbot using LLMs, RAG, and vector databases for context-aware responses.',
                technologies: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI'],
            },
            {
                title: 'Multi-Agent AI System',
                description: 'Create a multi-agent system that collaborates to solve complex tasks using AI agents.',
                technologies: ['LangChain', 'OpenAI Agents', 'Python', 'AutoGPT'],
            },
            {
                title: 'Document Analysis AI',
                description: 'Develop an AI system that analyzes, summarizes, and extracts insights from documents.',
                technologies: ['LLMs', 'RAG', 'Vector DB', 'FastAPI', 'React'],
            },
        ],
        careers: [
            {
                title: 'AI Engineer',
                description: 'Design and develop AI-powered applications using LLMs and machine learning.',
                salary: '₹8-15 LPA',
            },
            {
                title: 'ML Engineer',
                description: 'Build and deploy machine learning models and AI systems at scale.',
                salary: '₹10-18 LPA',
            },
            {
                title: 'Prompt Engineer',
                description: 'Specialize in crafting effective prompts for AI systems and LLMs.',
                salary: '₹7-12 LPA',
            },
            {
                title: 'AI Researcher',
                description: 'Conduct research on cutting-edge AI technologies and publish findings.',
                salary: '₹12-25 LPA',
            },
        ],
        syllabus: [
            {
                title: 'Module 1: AI Foundations',
                duration: '2 Weeks',
                topics: [
                    'Introduction to Artificial Intelligence',
                    'Machine Learning Basics',
                    'Deep Learning Fundamentals',
                    'Neural Networks Architecture',
                    'Python for AI Development',
                    'NumPy and Pandas for Data Processing',
                ],
            },
            {
                title: 'Module 2: LLM Core',
                duration: '3 Weeks',
                topics: [
                    'Introduction to Large Language Models',
                    'Transformer Architecture',
                    'GPT Models (GPT-3, GPT-4)',
                    'Understanding Context Windows',
                    'Token Management',
                    'OpenAI API Integration',
                    'Hugging Face Transformers',
                    'Fine-tuning LLMs',
                ],
            },
            {
                title: 'Module 3: Prompt Engineering',
                duration: '2 Weeks',
                topics: [
                    'Fundamentals of Prompt Engineering',
                    'Zero-shot and Few-shot Learning',
                    'Chain-of-Thought Prompting',
                    'Prompt Templates',
                    'Advanced Prompting Techniques',
                    'Prompt Optimization',
                    'Safety and Ethical Prompting',
                ],
            },
            {
                title: 'Module 4: RAG (Retrieval-Augmented Generation)',
                duration: '3 Weeks',
                topics: [
                    'Introduction to RAG Systems',
                    'Vector Databases (Pinecone, Weaviate)',
                    'Embeddings and Semantic Search',
                    'Document Chunking Strategies',
                    'Building RAG Pipelines',
                    'LangChain for RAG',
                    'Optimizing RAG Performance',
                ],
            },
            {
                title: 'Module 5: FastAPI & Backend Development',
                duration: '2 Weeks',
                topics: [
                    'FastAPI Framework',
                    'RESTful API Design',
                    'Request/Response Handling',
                    'API Authentication',
                    'Database Integration',
                    'Async Programming in Python',
                    'API Documentation',
                ],
            },
            {
                title: 'Module 6: AI Agents',
                duration: '3 Weeks',
                topics: [
                    'Introduction to AI Agents',
                    'Agent Architecture',
                    'Tool Integration',
                    'Memory Management',
                    'LangChain Agents',
                    'ReAct Pattern',
                    'Building Custom Agents',
                ],
            },
            {
                title: 'Module 7: Advanced AI Agents',
                duration: '3 Weeks',
                topics: [
                    'Multi-Agent Systems',
                    'Agent Collaboration',
                    'AutoGPT and BabyAGI',
                    'Agent Communication Protocols',
                    'Advanced Tool Usage',
                    'Agent Orchestration',
                    'Production Agent Deployment',
                ],
            },
            {
                title: 'Module 8: AI Deployment',
                duration: '2 Weeks',
                topics: [
                    'Docker Containerization',
                    'Cloud Deployment (AWS, Azure)',
                    'API Optimization',
                    'Monitoring and Logging',
                    'Cost Optimization',
                    'Scaling AI Applications',
                    'Production Best Practices',
                ],
            },
            {
                title: 'Module 9: Capstone Projects',
                duration: '3 Weeks',
                topics: [
                    'Real-world AI Project Development',
                    'End-to-end Implementation',
                    'Project Planning',
                    'Code Review and Optimization',
                    'Documentation',
                    'Presentation Skills',
                ],
            },
            {
                title: 'Module 10: Career Preparation',
                duration: '1 Week',
                topics: [
                    'Resume Building',
                    'Portfolio Development',
                    'Interview Preparation',
                    'Technical Interview Practice',
                    'Industry Trends',
                    'Job Application Strategies',
                ],
            },
        ],
        faqs: [
            {
                question: 'Do I need prior programming experience?',
                answer: 'Basic Python knowledge is recommended. We cover Python fundamentals in the course, but having some programming experience will help you progress faster.',
            },
            {
                question: 'What are the prerequisites?',
                answer: 'Understanding of basic programming concepts, familiarity with Python (preferred), and enthusiasm to learn AI technologies.',
            },
            {
                question: 'Will I get placement assistance?',
                answer: 'Yes! We provide comprehensive placement assistance including resume building, mock interviews, and job referrals to our partner companies.',
            },
            {
                question: 'What kind of projects will I build?',
                answer: 'You will build real-world AI applications including chatbots, RAG systems, AI agents, and document analysis tools using latest AI technologies.',
            },
            {
                question: 'Is this course suitable for working professionals?',
                answer: 'Absolutely! The course is designed with flexible schedules, weekend batches, and recorded sessions for working professionals.',
            },
        ],
    },
    {
        slug: 'data-science',
        title: 'Data Science',
        subtitle: 'Master Python, Machine Learning, Deep Learning & Analytics',
        description: 'Learn data science from scratch with Python, machine learning, deep learning, statistics, data visualization, and analytics. Build real-world data-driven applications.',
        heroVideo: '/videos/courses/data-science-hero.mp4',
        heroBackground: 'linear-gradient(135deg, rgba(161, 14, 38, 0.9), rgba(12, 8, 10, 0.95))',
        iconName: 'Database',
        mentor: {
            name: 'Priya Sharma',
            title: 'Senior Data Scientist',
            experience: '12+ Years in Data Science & Analytics',
            image: '/images/mentors/data-science-mentor.jpg',
            bio: 'Ex-Microsoft Data Scientist specializing in ML, Deep Learning, and Big Data Analytics. Led data teams at Fortune 500 companies.',
        },
        duration: '6 Months',
        level: 'Beginner to Advanced',
        skills: [
            'Python Programming',
            'Statistics & Mathematics',
            'Machine Learning',
            'Deep Learning',
            'Data Analysis',
            'Data Visualization',
            'SQL & Databases',
            'Power BI',
            'Tableau',
            'NumPy & Pandas',
            'Scikit-learn',
            'TensorFlow',
        ],
        projects: [
            {
                title: 'Predictive Analytics Dashboard',
                description: 'Build an interactive dashboard for predictive analytics using machine learning models.',
                technologies: ['Python', 'Scikit-learn', 'Power BI', 'SQL'],
            },
            {
                title: 'Customer Churn Prediction',
                description: 'Develop ML models to predict customer churn and provide actionable insights.',
                technologies: ['Python', 'Pandas', 'Random Forest', 'XGBoost'],
            },
            {
                title: 'Image Classification System',
                description: 'Create a deep learning model for image classification using CNNs.',
                technologies: ['TensorFlow', 'Keras', 'Python', 'OpenCV'],
            },
        ],
        careers: [
            {
                title: 'Data Scientist',
                description: 'Analyze complex data and build predictive models to drive business decisions.',
                salary: '₹6-12 LPA',
            },
            {
                title: 'Data Analyst',
                description: 'Extract insights from data and create visualizations for stakeholders.',
                salary: '₹4-8 LPA',
            },
            {
                title: 'ML Engineer',
                description: 'Build and deploy machine learning models in production environments.',
                salary: '₹8-15 LPA',
            },
            {
                title: 'Business Intelligence Analyst',
                description: 'Create BI solutions and dashboards for data-driven decision making.',
                salary: '₹5-10 LPA',
            },
        ],
        syllabus: [
            {
                title: 'Module 1: Python Fundamentals',
                duration: '2 Weeks',
                topics: ['Python Basics', 'Data Structures', 'Functions', 'OOP', 'File Handling'],
            },
            {
                title: 'Module 2: Statistics & Mathematics',
                duration: '2 Weeks',
                topics: ['Descriptive Statistics', 'Probability', 'Hypothesis Testing', 'Linear Algebra'],
            },
            {
                title: 'Module 3: Data Analysis with Pandas',
                duration: '2 Weeks',
                topics: ['NumPy Arrays', 'Pandas DataFrames', 'Data Cleaning', 'Data Transformation'],
            },
            {
                title: 'Module 4: Data Visualization',
                duration: '2 Weeks',
                topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Power BI', 'Tableau'],
            },
            {
                title: 'Module 5: Machine Learning',
                duration: '4 Weeks',
                topics: ['Supervised Learning', 'Unsupervised Learning', 'Scikit-learn', 'Model Evaluation'],
            },
            {
                title: 'Module 6: Deep Learning',
                duration: '3 Weeks',
                topics: ['Neural Networks', 'CNNs', 'RNNs', 'TensorFlow', 'Keras'],
            },
            {
                title: 'Module 7: SQL & Databases',
                duration: '2 Weeks',
                topics: ['SQL Queries', 'Database Design', 'Data Warehousing', 'ETL Processes'],
            },
            {
                title: 'Module 8: Capstone Project',
                duration: '3 Weeks',
                topics: ['Real-world Project', 'End-to-end Implementation', 'Deployment'],
            },
        ],
        faqs: [
            {
                question: 'Is coding experience required?',
                answer: 'No prior coding experience is needed. We teach Python from basics to advanced level.',
            },
            {
                question: 'What tools will I learn?',
                answer: 'Python, Jupyter, Power BI, Tableau, SQL, TensorFlow, Scikit-learn, and more.',
            },
            {
                question: 'Will I work on real projects?',
                answer: 'Yes! You will build multiple real-world data science projects throughout the course.',
            },
        ],
    },
    // Add minimal data for other courses (we can expand later)
    {
        slug: 'full-stack-development',
        title: 'Full Stack Development',
        subtitle: 'Master HTML, CSS, JavaScript, React, Next.js & Node.js',
        description: 'Become a full-stack developer by mastering frontend and backend technologies.',
        heroVideo: '/videos/courses/fullstack-hero.mp4',
        heroBackground: 'linear-gradient(135deg, rgba(122, 0, 25, 0.9), rgba(12, 8, 10, 0.95))',
        iconName: 'Code2',
        mentor: {
            name: 'Amit Verma',
            title: 'Senior Full Stack Developer',
            experience: '10+ Years',
            image: '/images/mentors/fullstack-mentor.jpg',
            bio: 'Full stack expert with experience at top tech companies.',
        },
        duration: '6 Months',
        level: 'Beginner to Advanced',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB'],
        projects: [
            {
                title: 'E-commerce Platform',
                description: 'Full-featured e-commerce site with payment integration.',
                technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            },
        ],
        careers: [
            {
                title: 'Full Stack Developer',
                description: 'Build complete web applications from frontend to backend.',
                salary: '₹6-14 LPA',
            },
        ],
        syllabus: [
            {
                title: 'Frontend Development',
                duration: '3 Months',
                topics: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
            },
            {
                title: 'Backend Development',
                duration: '3 Months',
                topics: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication'],
            },
        ],
        faqs: [
            {
                question: 'Is this course for beginners?',
                answer: 'Yes! We start from basics and take you to advanced level.',
            },
        ],
    },
    {
        slug: 'cloud-computing',
        title: 'Cloud Computing',
        subtitle: 'Master AWS, Azure, Docker, Kubernetes & DevOps',
        description: 'Learn cloud computing with AWS, Azure, containerization, and DevOps practices.',
        heroVideo: '/videos/courses/cloud-hero.mp4',
        heroBackground: 'linear-gradient(135deg, rgba(161, 14, 38, 0.9), rgba(12, 8, 10, 0.95))',
        iconName: 'Cloud',
        mentor: {
            name: 'Suresh Patel',
            title: 'Cloud Architect',
            experience: '14+ Years',
            image: '/images/mentors/cloud-mentor.jpg',
            bio: 'AWS Certified Solutions Architect with expertise in cloud infrastructure.',
        },
        duration: '5 Months',
        level: 'Intermediate',
        skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
        projects: [
            {
                title: 'Scalable Cloud Infrastructure',
                description: 'Design and deploy scalable cloud architecture on AWS.',
                technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
            },
        ],
        careers: [
            {
                title: 'Cloud Engineer',
                description: 'Design and manage cloud infrastructure and services.',
                salary: '₹7-16 LPA',
            },
        ],
        syllabus: [
            {
                title: 'Cloud Fundamentals',
                duration: '2 Months',
                topics: ['AWS Services', 'Azure Services', 'Cloud Architecture'],
            },
            {
                title: 'DevOps & Automation',
                duration: '3 Months',
                topics: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Jenkins'],
            },
        ],
        faqs: [
            {
                question: 'Do I need Linux knowledge?',
                answer: 'Basic Linux knowledge is helpful. We cover essential Linux commands in the course.',
            },
        ],
    },
    {
        slug: 'cyber-security',
        title: 'Cyber Security',
        subtitle: 'Master Ethical Hacking, Network Security & Penetration Testing',
        description: 'Learn cyber security, ethical hacking, and penetration testing to protect systems.',
        heroVideo: '/videos/courses/cybersecurity-hero.mp4',
        heroBackground: 'linear-gradient(135deg, rgba(122, 0, 25, 0.9), rgba(12, 8, 10, 0.95))',
        iconName: 'Shield',
        mentor: {
            name: 'Karthik Raj',
            title: 'Cyber Security Expert',
            experience: '12+ Years',
            image: '/images/mentors/security-mentor.jpg',
            bio: 'Certified Ethical Hacker and Security Consultant.',
        },
        duration: '6 Months',
        level: 'Intermediate to Advanced',
        skills: ['Ethical Hacking', 'Network Security', 'Penetration Testing', 'OWASP', 'Linux'],
        projects: [
            {
                title: 'Vulnerability Assessment',
                description: 'Perform security audits and penetration testing on web applications.',
                technologies: ['Burp Suite', 'Metasploit', 'Wireshark', 'Kali Linux'],
            },
        ],
        careers: [
            {
                title: 'Security Analyst',
                description: 'Monitor and protect systems from cyber threats.',
                salary: '₹5-12 LPA',
            },
        ],
        syllabus: [
            {
                title: 'Security Fundamentals',
                duration: '3 Months',
                topics: ['Networking', 'Linux', 'OWASP Top 10', 'Security Principles'],
            },
            {
                title: 'Ethical Hacking',
                duration: '3 Months',
                topics: ['Penetration Testing', 'Metasploit', 'Burp Suite', 'Web Security'],
            },
        ],
        faqs: [
            {
                question: 'Is this course ethical?',
                answer: 'Yes! We teach ethical hacking for security purposes only, with strict ethical guidelines.',
            },
        ],
    },
];

export const getCourseBySlug = (slug: string): CourseData | undefined => {
    return coursesData.find((course) => course.slug === slug);
};
