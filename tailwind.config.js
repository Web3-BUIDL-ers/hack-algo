module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        zIndex: {
          '1': '1',
        },
        width: {
          '572': '35.75rem',
          '492': '30.75rem',
        },
        height: {
          '445': '27.8rem',
        },
        screens: {
          'md2': '992px',
        },
        fontSize: {
          '45.5': '45.5px',
          '21.4': '21.4px',
        },
        colors: {
          'hack-cyan': '#00F5F5',
          'hack-cyan-dark': '#0AB4B4',
          'hack-black': '#020204',
          'scloudblue-dark': '#1C417E',
        },
      },
    },
    variants: {},
    plugins: [],

}
