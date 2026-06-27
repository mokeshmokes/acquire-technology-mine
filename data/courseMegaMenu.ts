import {
    Brain,
    Database,
    Code2,
    Cloud,
    Shield,
    Sparkles,
    BookOpen,
    Cpu,
    MessageSquare,
    Bot,
    TrendingUp,
    BarChart3,
    Globe,
    Laptop,
    Palette,
    Server,
    Container,
    GitBranch,
    Network,
    Lock,
    Bug,
    Terminal,
    LucideIcon,
} from 'lucide-react';

export interface CourseSubmenuItem {
    title: string;
    icon: LucideIcon;
}

export interface CourseMegaMenuItem {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    submenu: CourseSubmenuItem[];
}

export const courseMegaMenuData: CourseMegaMenuItem[] = [
    {
        id: 'ai-engineer',
        title: '🤖 AI Engineer Program',
        description: 'Generative AI, LLMs, AI Agents, LangChain, Prompt Engineering',
        icon: Brain,
        submenu: [
            { title: 'Generative AI', icon: Sparkles },
            { title: 'Large Language Models', icon: MessageSquare },
            { title: 'Prompt Engineering', icon: MessageSquare },
            { title: 'LangChain', icon: GitBranch },
            { title: 'RAG', icon: BookOpen },
            { title: 'AI Agents', icon: Bot },
            { title: 'Python for AI', icon: Code2 },
            { title: 'TensorFlow', icon: Cpu },
            { title: 'Hugging Face', icon: Bot },
        ],
    },
    {
        id: 'data-science',
        title: '📊 Data Science',
        description: 'Python, Machine Learning, Deep Learning, SQL, Power BI',
        icon: Database,
        submenu: [
            { title: 'Python', icon: Code2 },
            { title: 'Machine Learning', icon: Brain },
            { title: 'Statistics', icon: BarChart3 },
            { title: 'Power BI', icon: BarChart3 },
            { title: 'Tableau', icon: TrendingUp },
            { title: 'SQL', icon: Database },
            { title: 'Data Analytics', icon: BarChart3 },
            { title: 'NumPy', icon: Code2 },
            { title: 'Pandas', icon: Code2 },
        ],
    },
    {
        id: 'full-stack-development',
        title: '💻 Full Stack Development',
        description: 'HTML, CSS, JavaScript, React, Next.js, Node.js',
        icon: Code2,
        submenu: [
            { title: 'HTML', icon: Code2 },
            { title: 'CSS', icon: Palette },
            { title: 'JavaScript', icon: Code2 },
            { title: 'Bootstrap', icon: Palette },
            { title: 'Tailwind CSS', icon: Palette },
            { title: 'React.js', icon: Code2 },
            { title: 'Next.js', icon: Code2 },
            { title: 'Node.js', icon: Server },
            { title: 'Express.js', icon: Server },
            { title: 'MongoDB', icon: Database },
        ],
    },
    {
        id: 'cloud-computing',
        title: '☁️ Cloud Computing',
        description: 'AWS, Azure, Docker, Kubernetes, DevOps',
        icon: Cloud,
        submenu: [
            { title: 'AWS', icon: Cloud },
            { title: 'Azure', icon: Cloud },
            { title: 'Docker', icon: Container },
            { title: 'Kubernetes', icon: Container },
            { title: 'CI/CD', icon: GitBranch },
            { title: 'Terraform', icon: Code2 },
            { title: 'DevOps', icon: GitBranch },
            { title: 'Linux', icon: Terminal },
        ],
    },
    {
        id: 'cyber-security',
        title: '🔒 Cyber Security',
        description: 'Ethical Hacking, Network Security, Penetration Testing',
        icon: Shield,
        submenu: [
            { title: 'Ethical Hacking', icon: Bug },
            { title: 'Networking', icon: Network },
            { title: 'Linux', icon: Terminal },
            { title: 'OWASP', icon: Shield },
            { title: 'Burp Suite', icon: Bug },
            { title: 'Metasploit', icon: Bug },
            { title: 'Wireshark', icon: Network },
            { title: 'Security+', icon: Lock },
        ],
    },
];
