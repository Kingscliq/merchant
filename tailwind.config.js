module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './widgets/**/*.{js,ts,jsx,tsx}',
  ],
  important: '#__next',
  theme: {
    extend: {
      colors: {
        primary: '#0F375A',
        'primary-p300': '#2E788F',
        secondary: '#2CA1CA',
        'secondary-100': '#D0FCD6',
        tertiary: '#FFAB00',
        dark: '#333',
        light: '#f4f4f4',
        white: '#ffffff',
        'nav-grey': '#F2F2F2',
        'neutral-mid': '#505f79',
        'neutral-mid-80': '#97A0AF',
        'neutral-dark': '#061938',
        'neutral-dark-900': '#061938',
        'neutral-light': '#f4f5f7',
        'neutral-light-50': '#C1C7D0',
        'neutral-light-20': '#F4F5F7',
        'neutral-light-40': '#DFE1E6',
        'neutral-mid-300': '#5E6C84',
        'neutral-mid-70': '#A5ADBA',
        'light-grey': '#eeeeee',
        success: '#039855',
        error: '#b92500',
        'error-light': '#ffefed',
        'border-negative': '#f1998e',
        'content-negative': '#e11900',
        warn: '#ff8b00',
        'light-input': '#ebecf0',
        'dash-green': 'rgba(26, 48, 55, 1)',
        'link-text': 'rgba(193, 199, 208, 1)',
        'card-dark': '#1e1e1e',
        'neutral-mid-60': '#B3BAC5',
        'primary-600': '#378FAB',
        'link-grey': '#858585',
        'cf-primary-100': '#2CA1CA',
        'cf-primary-200': '#0F375A',
        'cf-secondary': '#5342B1',
        'cf-tertiary': '#68C9A4',
        // "cf-white": "#fff",
        'cf-success': '#4DB142',
        'cf-warning': '#FFAB00',
        'cf-info': '#EDB86A',
        'cf-light': '#D0DCE7',
        'cf-white': '#F0FCF8',
        'cf-gray-100': '#A7A7A7',
        'cf-gray-200': '#D0D5DD',
        'cf-gray-300': '#667085',
        'cf-gray-400': '#101828',
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        md: '1.75rem',
        lg: '2.25rem',
        xl: '3rem',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bolder: 600,
        bold: 700,
        extrabold: 800,
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
    plugins: [],
  },
};
