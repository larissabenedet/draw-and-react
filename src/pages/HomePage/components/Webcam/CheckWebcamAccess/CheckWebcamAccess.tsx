import React from 'react'
import { AccessDenied } from '../AccessDenied'
import { WebcamAnalysisManager } from '../WebcamAnalysisManager'

const CheckWebcamAccess: React.FC = () => {
  const browserHaveAccessToWebcam: boolean = !!(
    navigator.mediaDevices && navigator.mediaDevices.getUserMedia
  )

  return (
    <main>
      {browserHaveAccessToWebcam ? <WebcamAnalysisManager /> : <AccessDenied />}
    </main>
  )
}

export default CheckWebcamAccess
