import React from 'react'

import { ButtonProps } from './interface'



const Button: React.FC<ButtonProps> = ({ children, className,onClick, type="button" }) => {
  return (
    <button onClick={onClick} className={`${className} cursor-pointer`} type={type} disabled={true}>
      {children}
    </button>
  )
}

export default Button
