module.exports = {
  theme: {
    screens: {
      sm: '512px',
      md: '640px',
      lg: '960px',
      xl: '1279px',
    },
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
      display: ['Oswald', 'sans-serif'],
    },
    fontSize: {
      // sm: '0.9rem',
      // base: '1rem',
      // lg: '1.25rem',
      // '2lg': '1.875rem',
      // '3lg': '2.5rem',
      // xl: '3.125rem',     // 50
      // '2xl': '3.75rem',   // 60
      // '3sxl': '4.6875rem',
      // '3xl': '6.875rem',  // 110
      // '4xl': '10rem',     // 160
      sm: '0.9rem',
      base: '1rem',
      lg: '1.5rem',
      '2lg': '2rem',
      '3lg': '3rem',
      xl: '4rem',           // 64
      '2xl': '4.75rem',     // 76
      '3xl': '6.25rem',    // 100
      '4xl': '7.5rem',     // 160
    },
    extend: {
      colors: {
        black: '#0c0c0c',
        white: '#F6F9FB',
        blue: '#002e5e',
        'blue-opacity': 'rgba(0, 46, 94, 0.7)',
        orange: '#f35d28',
        'orange-opacity': 'rgba(243, 93, 40, 0.7)',
        green: '#0c3026',
        yellow: '#fef045',
        'orange-light': '#FFE8D5',
        pink: '#f0ccac',
      },
      spacing: {
        '1/5': '20%',
        '1/12': '8.33333%',
        '2/12': '16.66667%',
        '3/12': '25%',
        '4/12': '33.33333%',
        '5/12': '41.66667%',
        '6/12': '50%',
        '7/12': '58.33333%',
        '8/12': '66.66667%',
        '9/12': '75%',
        '10/12': '83.33333%',
        '11/12': '91.66667%',
        '1/24': '4.16667%',
        'full': '100%',
        '64': '16rem'
      },
    }
  },
  variants: {},
  plugins: []
}
