/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require( 'tailwindcss/defaultTheme' )

module.exports = {
  purge: [ './src/**/*.[jt]s?(x)' ],
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
    },
  },
  variants: {},
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
