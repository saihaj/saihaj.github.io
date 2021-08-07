import { ReactNode } from 'react'
import cx from 'clsx'
import { StitchesComponentWithAutoCompleteForJSXElements } from '@stitches/react'
import { styled } from '../theme'

const Btn = styled( 'button', {
  margin: 0,
  padding: 0,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  color: '$white',
  borderColor: '$yellow',
  borderStyle: 'solid',
  borderWidth: 1,
  minWidth: '8rem',
  '&:hover': {
    backgroundColor: '$yellow',
    color: '$darkBlue',
  },
} )

type ButtonProps = {
  children: ReactNode
} & StitchesComponentWithAutoCompleteForJSXElements<'button'>

const Button = ( { children, className, ...props }:ButtonProps ) => (
  <Btn type="button" className={cx( className )} {...props}>{children}</Btn>
)

export default Button
