import { Analysis } from '../Analysys'
import { AccessDenied } from '../AccessDenied'
import React from 'react'

const WebcamManager: React.FC = () => {
  const browserHaveAccessToWebcam = !!(
    navigator.mediaDevices && navigator.mediaDevices.getUserMedia
  )

  return (
    <main>
      {!browserHaveAccessToWebcam && <AccessDenied />}
      <Analysis />
    </main>
  )
}

export default WebcamManager
