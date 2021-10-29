import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme } = createStitches( {
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
    mx: ( value: number ) => ( { marginLeft: value, marginRight: value } ),
    my: ( value: number ) => ( { marginTop: value, marginBottom: value } ),
    px: ( value: number ) => ( { paddingLeft: value, paddingRight: value } ),
    py: ( value: number ) => ( { paddingTop: value, paddingBottom: value } ),
  },
} )
