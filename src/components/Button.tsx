import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import cx from 'classnames'

type ButtonProps ={
  label: string
  className?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = ( { label, className, ...props }:ButtonProps ) => (
  <button
    type="button"
    className={cx(
      'bg-white text-theme-primary',
      'font-fugaz rounded-lg',
      'hover:bg-gray-200',
      className,
    )}
    {...props}
  >
    {label}
  </button>
)

export default Button
