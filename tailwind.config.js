module.exports = {
  purge: [
    './src/**/*.[jt]s?(x)',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Fira Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        fugaz: [ '"Fugaz One"' ],
      },
    },
  },
  variants: {},
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
