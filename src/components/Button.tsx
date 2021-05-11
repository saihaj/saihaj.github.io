import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'clsx'

import { Colors } from '../theme'

const useStyles = createUseStyles( {
  btn: {
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: Colors.white,
    borderColor: Colors.yellow,
    borderStyle: 'solid',
    borderWidth: 1,
    minWidth: '8rem',
    '&:hover': {
      backgroundColor: Colors.yellow,
      color: Colors.darkBlue,
    },
  },
} )

type ButtonProps = {
  children: ReactNode
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ( { children, className, ...props }:ButtonProps ) => {
  const styles = useStyles()

  return (
    <button type="button" className={cx( styles.btn, className )} {...props}>{children}</button>
  )
}

export default Button
