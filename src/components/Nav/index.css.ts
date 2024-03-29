import { style, styleVariants } from '@vanilla-extract/css'
import { THEME_VARS } from '../../styles/global.css'

export const NavWrapper = style({
  maxWidth: THEME_VARS.maxWidth,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'flex-start',
  gap: 14,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 20,
  paddingBottom: 40,
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: THEME_VARS.color.backgroundBlue,
  maskImage: `linear-gradient(${THEME_VARS.color.backgroundBlue}, 85%,transparent)`,
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
      padding: '1px 5px',
      ':hover': {
        color: THEME_VARS.color.white,
        borderColor: THEME_VARS.color.white,
      },
    },
  ],
  unselected: [navItemBase, {}],
})
