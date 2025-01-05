import React from 'react'
import { Analysis } from '../Analysis'
import { AccessDenied } from '../AccessDenied'

const WebcamManager: React.FC = () => {
  const browserHaveAccessToWebcam: boolean = !!(
    navigator.mediaDevices && navigator.mediaDevices.getUserMedia
  )

  return (
    <main>{browserHaveAccessToWebcam ? <Analysis /> : <AccessDenied />}</main>
  )
}

export default WebcamManager
