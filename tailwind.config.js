module.exports = {
  theme: {
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
      display: ['Oswald', 'sans-serif'],
    },
    fontSize: {
      sm: '0.9rem',
      base: '1rem',
      lg: '1.25rem',
      '2lg': '1.875rem',
      xl: '3.125rem',     // 50
      '2xl': '3.75rem',   // 60
      '3xl': '6.875rem',  // 110
      '4xl': '10rem',     // 160
    },
    extend: {
      colors: {
        black: '#0c0c0c',
        white: '#f6f9fb',
        blue: '#002e5e',
        green: '#0c3026',
        yellow: '#fef045',
        orange: '#f35d28',
        'orange-light': '#FFE8D5',
        pink: '#f0ccac',
      },
      spacing: {
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
        'full': '100%',
      },
    }
  },
  variants: {},
  plugins: []
}
