module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F4F8", // gray-50
          100: "#D9E2EC", // gray-100
          200: "#BCCCDC", // gray-200
          300: "#9FB3C8", // gray-300
          400: "#829AB1", // gray-400
          500: "#627D98", // gray-500
          600: "#486581", // gray-600
          700: "#334E68", // gray-700
          800: "#243B53", // gray-800
          900: "#1B365D", // navy-900
          DEFAULT: "#1B365D", // navy-900
        },
        secondary: {
          50: "#F0F9FF", // sky-50
          100: "#E0F2FE", // sky-100
          200: "#BAE6FD", // sky-200
          300: "#87CEEB", // sky-300
          400: "#38BDF8", // sky-400
          500: "#0EA5E9", // sky-500
          600: "#0284C7", // sky-600
          700: "#0369A1", // sky-700
          800: "#075985", // sky-800
          900: "#0C4A6E", // sky-900
          DEFAULT: "#87CEEB", // sky-300
        },
        accent: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#D4AF37", // gold-500
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
          800: "#92400E", // amber-800
          900: "#78350F", // amber-900
          DEFAULT: "#D4AF37", // gold-500
        },
        background: "#FFFFFF", // white
        surface: "#F8FAFB", // gray-50
        text: {
          primary: "#2D3748", // gray-800
          secondary: "#718096", // gray-500
        },
        success: "#38A169", // green-600
        warning: "#D69E2E", // yellow-600
        error: "#E53E3E", // red-600
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
        cta: ['Montserrat', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(27, 54, 93, 0.1)',
        'card': '0 2px 8px rgba(27, 54, 93, 0.08)',
        'floating': '0 8px 24px rgba(27, 54, 93, 0.12)',
        'hero': '0 20px 40px rgba(27, 54, 93, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'parallax': 'parallax 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-50px)' },
        },
      },
      transitionDuration: {
        'fast': '300ms',
        'smooth': '400ms',
      },
      transitionTimingFunction: {
        'ease-out-custom': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}