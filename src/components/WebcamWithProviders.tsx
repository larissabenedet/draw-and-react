import React from 'react'
import { ModelProvider } from '../contexts/ModelContext'
import { WebcamProvider } from '../contexts/WebcamContext'
import WebcamAnalysisManager from '../pages/HomePage/components/Webcam/CheckWebcamAccess/WebcamAnalysisManager/WebcamAnalysisManager'

const WebcamWithProviders: React.FC = () => {
  return (
    <ModelProvider>
      <WebcamProvider>
        <WebcamAnalysisManager />
      </WebcamProvider>
    </ModelProvider>
  )
}

export default WebcamWithProviders
