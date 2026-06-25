'use client';

import { Code2, Brain, Cloud, Shield, Zap, Award } from 'lucide-react';

const icons = [
    { Icon: Code2, x: '10%', y: '20%', delay: '0s',    dur: '6s'  },
    { Icon: Brain, x: '80%', y: '15%', delay: '0.5s',  dur: '7s'  },
    { Icon: Cloud, x: '15%', y: '70%', delay: '1s',    dur: '8s'  },
    { Icon: Shield,x: '85%', y: '75%', delay: '1.5s',  dur: '6.5s'},
    { Icon: Zap,   x: '50%', y: '10%', delay: '2s',    dur: '7.5s'},
    { Icon: Award, x: '90%', y: '45%', delay: '2.5s',  dur: '9s'  },
];

export default function FloatingElements() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {icons.map(({ Icon, x, y, delay, dur }, index) => (
                <div
                    key={index}
                    className="absolute animate-float-element"
                    style={{
                        left: x,
                        top: y,
                        animationDelay: delay,
                        animationDuration: dur,
                        willChange: 'transform, opacity',
                    }}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-40" />
                        <Icon className="w-8 h-8 text-primary relative z-10" />
                    </div>
                </div>
            ))}
        </div>
    );
}
