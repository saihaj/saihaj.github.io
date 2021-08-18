import { ReactNode } from 'react'
import cx from 'clsx'
import type * as Polymorphic from '@radix-ui/react-polymorphic'

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
} & Polymorphic.OwnProps<typeof Btn>

const Button = ( { children, className, ...props }:ButtonProps ) => (
  <Btn type="button" className={cx( className )} {...props}>{children}</Btn>
)

export default Button
