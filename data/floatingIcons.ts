interface CourseIcon {
    emoji: string;
    label: string;
}

// AI Engineer Course Icons - 18 unique icons (2 per section × 9 sections)
export const aiEngineerIcons: CourseIcon[] = [
    { emoji: '🤖', label: 'AI' },
    { emoji: '🧠', label: 'Neural Network' },
    { emoji: '⚡', label: 'LLM' },
    { emoji: '🐍', label: 'Python' },
    { emoji: '🪄', label: 'Prompt' },
    { emoji: '🔍', label: 'RAG' },
    { emoji: '💬', label: 'Chatbot' },
    { emoji: '🧩', label: 'LangChain' },
    { emoji: '🗄️', label: 'Vector DB' },
    { emoji: '🛰️', label: 'AI Agent' },
    { emoji: '💎', label: 'Gemini' },
    { emoji: '☁️', label: 'OpenAI' },
    { emoji: '⚙️', label: 'FastAPI' },
    { emoji: '🔗', label: 'API' },
    { emoji: '📄', label: 'Document' },
    { emoji: '💻', label: 'Code' },
    { emoji: '🚀', label: 'Deploy' },
    { emoji: '🔮', label: 'ML Model' },
];

// Data Science Course Icons - 18 unique icons
export const dataScienceIcons: CourseIcon[] = [
    { emoji: '🐍', label: 'Python' },
    { emoji: '📊', label: 'Power BI' },
    { emoji: '📈', label: 'Analytics' },
    { emoji: '🧮', label: 'Statistics' },
    { emoji: '🧠', label: 'Machine Learning' },
    { emoji: '📚', label: 'Pandas' },
    { emoji: '🔥', label: 'NumPy' },
    { emoji: '🤖', label: 'TensorFlow' },
    { emoji: '💡', label: 'Insights' },
    { emoji: '🎯', label: 'Target' },
    { emoji: '📉', label: 'Charts' },
    { emoji: '💻', label: 'Jupyter' },
    { emoji: '🔍', label: 'Research' },
    { emoji: '⚡', label: 'Fast' },
    { emoji: '🚀', label: 'Launch' },
    { emoji: '✨', label: 'Analyze' },
    { emoji: '🎨', label: 'Visualization' },
    { emoji: '📱', label: 'Dashboard' },
];

// Full Stack Development Icons - 18 unique icons
export const fullStackIcons: CourseIcon[] = [
    { emoji: '⚛️', label: 'React' },
    { emoji: '▲', label: 'Next.js' },
    { emoji: '🟢', label: 'Node.js' },
    { emoji: '🟨', label: 'JavaScript' },
    { emoji: '🔷', label: 'TypeScript' },
    { emoji: '🍃', label: 'MongoDB' },
    { emoji: '🗄️', label: 'MySQL' },
    { emoji: '🐳', label: 'Docker' },
    { emoji: '💻', label: 'VS Code' },
    { emoji: '🚀', label: 'Deploy' },
    { emoji: '🎨', label: 'CSS' },
    { emoji: '🌐', label: 'HTML' },
    { emoji: '📦', label: 'NPM' },
    { emoji: '⚡', label: 'Vite' },
    { emoji: '🔧', label: 'Tools' },
    { emoji: '✨', label: 'UI' },
    { emoji: '🌟', label: 'UX' },
    { emoji: '💫', label: 'Animation' },
];

// Cloud Computing Icons - 18 unique icons
export const cloudComputingIcons: CourseIcon[] = [
    { emoji: '☁️', label: 'AWS' },
    { emoji: '🐳', label: 'Docker' },
    { emoji: '☸️', label: 'Kubernetes' },
    { emoji: '🐧', label: 'Linux' },
    { emoji: '🏗️', label: 'Terraform' },
    { emoji: '🚀', label: 'Deploy' },
    { emoji: '🔄', label: 'CI/CD' },
    { emoji: '🖥️', label: 'Server' },
    { emoji: '🔐', label: 'Security' },
    { emoji: '🌐', label: 'Network' },
    { emoji: '⚙️', label: 'Jenkins' },
    { emoji: '📊', label: 'Monitoring' },
    { emoji: '⚡', label: 'Performance' },
    { emoji: '🔧', label: 'DevOps' },
    { emoji: '📦', label: 'Container' },
    { emoji: '🎯', label: 'Scale' },
    { emoji: '✨', label: 'Optimize' },
    { emoji: '💫', label: 'Automation' },
];

// Cyber Security Icons - 18 unique icons
export const cyberSecurityIcons: CourseIcon[] = [
    { emoji: '🛡️', label: 'Shield' },
    { emoji: '🔒', label: 'Lock' },
    { emoji: '🌐', label: 'Firewall' },
    { emoji: '🖥️', label: 'Terminal' },
    { emoji: '🐧', label: 'Linux' },
    { emoji: '🔑', label: 'Encryption' },
    { emoji: '🕵️', label: 'Scan' },
    { emoji: '💻', label: 'Hacking' },
    { emoji: '⚡', label: 'Response' },
    { emoji: '🎯', label: 'Target' },
    { emoji: '🔐', label: 'Secure' },
    { emoji: '🔍', label: 'Analyze' },
    { emoji: '⚠️', label: 'Threat' },
    { emoji: '🌍', label: 'Network' },
    { emoji: '🔧', label: 'Tools' },
    { emoji: '💡', label: 'Intelligence' },
    { emoji: '🚀', label: 'Defend' },
    { emoji: '✨', label: 'Protect' },
];

export const courseIconsMap = {
    'ai-engineer': aiEngineerIcons,
    'data-science': dataScienceIcons,
    'full-stack-development': fullStackIcons,
    'cloud-computing': cloudComputingIcons,
    'cyber-security': cyberSecurityIcons,
};
