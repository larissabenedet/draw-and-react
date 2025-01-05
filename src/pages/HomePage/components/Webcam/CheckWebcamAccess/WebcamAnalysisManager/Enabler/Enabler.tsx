import React from 'react'
import { ButtonStyled, TitleWithIcon } from './styles'
import Webcam from '../../../../../../../assets/svgs/Webcam'

type EnablerProps = {
  enableWebcam: React.MouseEventHandler<HTMLButtonElement>
}

const Enabler: React.FC<EnablerProps> = ({ enableWebcam }) => {
  return (
    <div>
      <TitleWithIcon>
        <div>
          <Webcam />
        </div>
        <div>
          <h2>Enable Webcam to Start</h2>
        </div>
      </TitleWithIcon>
      <p>
        To start, activate your webcam by clicking the button below and granting
        permission in your browser.
      </p>
      <ButtonStyled onClick={enableWebcam}>Activate Webcam</ButtonStyled>
    </div>
  )
}

export default Enabler
