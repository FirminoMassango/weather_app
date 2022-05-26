module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      'left': '#1E213A',
      'right': '#100E1D',
      'white': '#fff',
      'header': '#E7E7EB',
      'maxdegree': '#E7E7EB',
      'mindegree': '#A09FB1',
      'deactivatedDegreeButton': '#585676',
      'progress': '#FFEC65',
      'footer': '#A09FB1',
      'secondary': '#6E707A',
      'dark-100': '#A09FB1',
      'dark-200': '#88869D'

    },
    backgroundPosition: {
      'top-4': 'center top 5rem',
    },
    extend: {
      fontFamily: {
        raleway: ['Raleway']
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/Cloud-background.png')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '100%',
        '16': '4rem',
      },
      
    },
  },
  plugins: [],
}
