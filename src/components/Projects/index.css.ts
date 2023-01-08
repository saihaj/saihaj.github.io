import { style } from '@vanilla-extract/css'
import { THEME_VARS } from '../../styles/global.css'

export const ProjectContainer = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 40,
})

export const Header = style({
  fontFamily: 'var(--work-sans)',
  fontSize: 20,
})

export const ProjectList = style({
  display: 'flex',
  flexDirection: 'column',
})

export const ProjectItem = style({
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `0.5px solid ${THEME_VARS.color.fadedWhite}`,
  padding: '8px 0',
  ':hover': {
    opacity: 0.8,
    transition: 'opacity .1s ease-in',
  },
  selectors: {
    '&:first-child': {
      paddingTop: 0,
    },
    '&:last-child': {
      borderBottom: 'none',
      paddingBottom: 0,
    },
  },
})

export const ProjectName = style({
  fontSize: 16,
  margin: 0,
  color: THEME_VARS.color.white,
})

export const ProjectDescription = style({
  color: THEME_VARS.color.fadedWhite,
  margin: 0,
  maxWidth: 400,
  textAlign: 'right',
})
