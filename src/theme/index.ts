export enum Colors {
  white = '#fff',
  darkBlue = '#000814',
  yellow = '#FFBA08'
}

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
    },
    a: {
      color: Colors.white,
      padding: 0,
      margin: 0,
      textDecorationThickness: 1.5,
      textDecorationStyle: 'dotted',
      textUnderlineOffset: '0.15rem',
      '&:hover': {
        opacity: 0.79,
      },
    },
  },
}
