import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#080B0D',
                surface: '#12080C',
                'surface-elevated': '#1E0F11',
                primary: {
                    DEFAULT: '#7A0019',
                    hover: '#C21838',
                    secondary: '#A10E26',
                },
                border: 'rgba(255, 255, 255, 0.08)',
                muted: '#B8B8B8',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            boxShadow: {
                glow: '0 0 30px rgba(194, 24, 56, 0.30)',
                premium: '0 10px 40px rgba(0, 0, 0, 0.5)',
            },
            backdropBlur: {
                xs: '2px',
            },
            zIndex: {
                '100': '100',
                '90': '90',
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
                'slide-down': 'slideDown 0.3s ease-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glowPulse 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glowPulse: {
                    '0%, 100%': { opacity: '0.3' },
                    '50%': { opacity: '0.6' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
