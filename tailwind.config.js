/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require( 'tailwindcss/defaultTheme' )

module.exports = {
  purge: [ './src/**/*.{js,jsx,ts,tsx}' ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Rubik', ...defaultTheme.fontFamily.sans ],
        fugaz: [ '"Fugaz One"' ],
      },
      colors: {
        theme: {
          primary: '#03045E',
          secondary: '#95A5A6',
        },
      },
      strokeWidth: {
        3: '3',
        4: '4',
        5: '5',
      },
    },
  },
  variants: {},
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
