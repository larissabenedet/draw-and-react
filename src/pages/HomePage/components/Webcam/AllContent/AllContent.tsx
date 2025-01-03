import { Enabler } from '../Enabler'
import { AccessDenied } from '../AccessDenied'
import React, { useRef, useState } from 'react'
import { ShapeAnalysis } from '../ShapeAnalysis'

const AllContent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isWebcamActive, setIsWebcamActive] = useState<boolean>(false)

  const browserHaveAccessToWebcam = !!(
    navigator.mediaDevices && navigator.mediaDevices.getUserMedia
  )

  const activateWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      })

      if (videoRef.current) {
        setIsWebcamActive(true)
        videoRef.current.srcObject = stream
        videoRef.current.play()
      }
    } catch (error) {
      console.error('Error accessing webcam:', error)
    }
  }

  return (
    <main>
      {!browserHaveAccessToWebcam && <AccessDenied />}
      {!isWebcamActive && <Enabler activateWebcam={activateWebcam} />}
      <ShapeAnalysis isWebcamActive={isWebcamActive} ref={videoRef} />
    </main>
  )
}

export default AllContent
