'use client';

interface HeroWordRevealProps {
    text: string;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'p';
}

export default function HeroWordReveal({ text, className = '', as = 'h1' }: HeroWordRevealProps) {
    const words = text.split(' ');
    const Tag = as;

    return (
        <Tag className={className}>
            {words.map((word, index) => (
                <span key={index} className="inline-block">
                    <span className="hero-word inline-block">{word}</span>
                    {index < words.length - 1 && <span className="inline-block">&nbsp;</span>}
                </span>
            ))}
        </Tag>
    );
}
