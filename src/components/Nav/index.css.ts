import { style, styleVariants } from '@vanilla-extract/css'
import { THEME_VARS } from '../../styles/global.css'

export const NavWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: 14,
  marginTop: 20,
  marginBottom: 40,
})

const navItemBase = style({
  color: THEME_VARS.color.fadedWhite,
  textDecoration: 'none',
  fontFamily: 'var(--work-sans)',
  fontWeight: 600,
  fontSize: 14,
  padding: '2px 6px',
  ':hover': {
    color: THEME_VARS.color.white,
  },
})

export const NavItem = styleVariants({
  selected: [
    navItemBase,
    {
      borderColor: THEME_VARS.color.fadedWhite,
      borderWidth: 1,
      borderStyle: 'solid',
      ':hover': {
        color: THEME_VARS.color.white,
      },
    },
  ],
  unselected: [navItemBase, {}],
})
