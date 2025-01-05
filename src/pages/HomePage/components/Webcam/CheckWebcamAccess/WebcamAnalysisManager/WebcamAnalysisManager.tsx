import React from 'react'
import { Analyzing } from './Analyzing'
import { ActivateWebcamPermission } from './ActivateWebcamPermission'
import { useWebcamContext } from '../../../../../../contexts/WebcamContext'

const WebcamAnalysisManager: React.FC = () => {
  const { isWebcamActive } = useWebcamContext()

  return <>{isWebcamActive ? <Analyzing /> : <ActivateWebcamPermission />}</>
}

export default WebcamAnalysisManager
