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
  },
}
