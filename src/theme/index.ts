import { createCss } from '@stitches/react'

export const { styled, css, global, keyframes, getCssString, theme } = createCss( {
  theme: {
    colors: {
      white: '#fff',
      darkBlue: '#000814',
      yellow: '#FFBA08',
      red: '#E51010',
      grey: '#E4E2E2',
    },
  },
  media: {
    mobile: '(max-width: 480px)',
    tablet: '(max-width: 768px)',
    laptop: '(max-width: 1024px)',
  },
  utils: {
    mx: () => value => ( { marginLeft: value, marginRight: value } ),
    my: () => value => ( { marginTop: value, marginBottom: value } ),
    px: () => value => ( { paddingLeft: value, paddingRight: value } ),
    py: () => value => ( { paddingTop: value, paddingBottom: value } ),
  },
} )
