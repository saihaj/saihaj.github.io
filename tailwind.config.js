const defaultTheme = require( 'tailwindcss/defaultTheme' )

module.exports = {
  purge: [ './src/**/*.[jt]s?(x)' ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ '"Fira Sans"', ...defaultTheme.fontFamily.sans ],
        fugaz: [ '"Fugaz One"' ],
      },
    },
  },
  variants: {},
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
