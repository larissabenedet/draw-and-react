import React from 'react'
import ActionButton from '../../../../../../../components/ActionButton'
import Webcam from '../../../../../../../assets/svgs/Webcam'
import { useWebcamContext } from '../../../../../../../contexts/WebcamContext'

const ActivateWebcamPermission: React.FC = () => {
  const { activateWebcam } = useWebcamContext()
  return (
    <ActionButton
      title="Enable Webcam to Start"
      description="To start, activate your webcam by clicking the button below and granting permission in your browser."
      buttonText="Activate Webcam"
      icon={<Webcam />}
      onClick={activateWebcam}
    />
  )
}

export default ActivateWebcamPermission
