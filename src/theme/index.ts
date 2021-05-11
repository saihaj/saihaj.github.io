export enum Colors {
  white = '#fff',
  darkBlue = '#000814',
  yellow = '#FFBA08',
  red = '#E51010'
}

export enum Breakpoints {
  mobile = 480,
  tablet = 768,
  laptop = 1024,
}

export const widthMoreThan = ( width:number ) => `@media screen and (min-width: ${width}px)`

export const widthLessThan = ( width:number ) => `@media screen and (max-width: ${width - 1}px)`

export const globalStyles = {
  '@global': {
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      fontFamily: 'Rubik',
      fontSize: 14,
    },
    body: {
      backgroundColor: Colors.darkBlue,
      color: Colors.white,
      fontSize: '1.5rem',
    },
    '#__next': {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      maxWidth: '54rem',
      [ widthLessThan( Breakpoints.tablet ) ]: {
        padding: '0 0.6rem',
      },
    },
    a: {
      color: Colors.white,
      padding: 0,
      margin: 0,
      textDecorationThickness: 1.5,
      textDecorationStyle: 'dotted',
      textUnderlineOffset: '0.15rem',
      '&:hover': {
        color: Colors.yellow,
        '& svg > *': {
          stroke: Colors.yellow,
        },
      },
    },
    ':focus': {
      borderColor: Colors.red,
    },
    ':focus-visible': {
      outline: `${Colors.white} solid 1px`,
      borderColor: Colors.yellow,
    },
  },
}
