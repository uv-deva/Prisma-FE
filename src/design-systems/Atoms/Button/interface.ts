import { PropsWithChildren } from 'react'
import { AnyFunction, Modify } from '@/interfaces'

export type ButtonElementProps = Modify<
  React.HTMLProps<HTMLButtonElement>,
  {
    type?: 'button' | 'submit' | 'reset' | undefined
    loading?: boolean
    fullWidth?: boolean
    className?: string
    icon?: React.ReactNode
    iconPosition?: 'start' | 'end'
  }
>

export interface ButtonProps extends ButtonElementProps, PropsWithChildren {}
