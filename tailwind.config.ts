import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'hi-card':'#15192B',
        'hi-cardlight':'#EDEDED',
        'hi-dark': '#020617', 
        'hi-darklight': '#ffffff',
        'hi-dashboard-primary':'#0A102D',
        'hi-hover-dashboard':'#383E55',
        'hi-hover-dashboard-light':'#A0C7DF',
        'hi-dashboard-light':'#E3F4FF',
      },
      textColor: {
        'hi-dark': '#020617',
        'hi-darklight': '#ffffff',
      }
    },
  },
  plugins: [],
}
export default config
