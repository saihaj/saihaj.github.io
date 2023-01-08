import { style } from '@vanilla-extract/css'
import { THEME_VARS } from './global.css'

export const LinkStyle = style({
  textDecoration: 'underline',
  color: THEME_VARS.color.white,
  ':hover': {
    color: THEME_VARS.color.fadedWhite,
  },
})

export const LayoutContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const Paragraph = style({
  margin: 0,
})
