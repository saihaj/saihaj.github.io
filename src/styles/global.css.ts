import { style, createGlobalTheme, globalStyle } from '@vanilla-extract/css'

export const THEME_VARS = createGlobalTheme(':root', {
  color: {
    backgroundBlue: '#000814',
    white: '#fff',
    fadedWhite: '#CDCDCD',
    fadedGrey: '#cdcdb380',
  },
  maxWidth: '800px',
})

globalStyle('html, body', {
  backgroundColor: THEME_VARS.color.backgroundBlue,
  color: THEME_VARS.color.white,
})

export const LayoutContainer = style({
  maxWidth: THEME_VARS.maxWidth,
  padding: '0 16px',
  margin: '0 auto',
  // Full view port - height of nav area - height of footer area
  minHeight: 'calc(100vh - 80px - 36.5px)',
})

export const Footer = style({
  paddingBottom: 12,
  paddingTop: 12,
  position: 'sticky',
  backgroundColor: THEME_VARS.color.backgroundBlue,
  bottom: 0,
  left: 0,
  right: 0,
  margin: '0 auto',
  width: '100%',
  maxWidth: THEME_VARS.maxWidth,
  textAlign: 'center',
  borderTopColor: THEME_VARS.color.fadedGrey,
  borderTopWidth: 1,
  borderTopStyle: 'solid',
  color: THEME_VARS.color.fadedWhite,
  fontSize: 10,
  fontWeight: 600,
  fontFamily: 'var(--work-sans)',
})
