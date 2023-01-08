import { style, createGlobalTheme, globalStyle } from '@vanilla-extract/css'

export const THEME_VARS = createGlobalTheme(':root', {
  color: {
    backgroundBlue: '#000814',
    white: '#fff',
    fadedWhite: '#CDCDCD',
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
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
})

export const Footer = style({
  marginBottom: 12,
  paddingTop: 12,
  marginTop: 'auto',
  textAlign: 'center',
  borderTopColor: THEME_VARS.color.fadedWhite,
  borderTopWidth: 1,
  borderTopStyle: 'solid',
  color: THEME_VARS.color.fadedWhite,
  fontSize: 10,
  fontWeight: 600,
  fontFamily: 'var(--work-sans)',
})
