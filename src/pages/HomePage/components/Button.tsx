import React from 'react'
import { ButtonStyled } from './styles'

interface ButtonProps {
  text: string
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <ButtonStyled>{text}</ButtonStyled>
}

export default Button
