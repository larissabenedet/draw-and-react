import React from 'react'
import { ButtonStyled, TitleWithIcon } from './styles'

interface ActionButtonProps {
  title: string
  description: string
  buttonText: string
  icon: React.ReactNode
  onClick: () => void
}

const ActionButton: React.FC<ActionButtonProps> = ({
  title,
  description,
  buttonText,
  icon,
  onClick,
}) => {
  return (
    <div>
      <TitleWithIcon>
        <div>{icon}</div>
        <div>
          <h2>{title}</h2>
        </div>
      </TitleWithIcon>
      <p>{description}</p>
      <ButtonStyled onClick={onClick}>{buttonText}</ButtonStyled>
    </div>
  )
}

export default ActionButton
