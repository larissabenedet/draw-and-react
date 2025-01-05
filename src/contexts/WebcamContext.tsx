import * as tmImage from '@teachablemachine/image'
import React, { createContext, useContext, useState, ReactNode } from 'react'

type WebcamContextType = {
  webcam: tmImage.Webcam
  isWebcamActive: boolean
  activateWebcam: VoidFunction
  pauseWebcam: VoidFunction
  updateWebcamFrames: VoidFunction
  playWebcam: VoidFunction
}

const WebcamContext = createContext<WebcamContextType | undefined>(undefined)

export const WebcamProvider: React.FC<{
  children: ReactNode
}> = ({ children }) => {
  const [webcam] = useState(() => new tmImage.Webcam(600, 600, true))
  const [isWebcamActive, setIsWebcamActive] = useState<boolean>(false)

  const activateWebcam = async () => {
    try {
      await webcam.setup()
      playWebcam()
      setIsWebcamActive(true)
    } catch (error) {
      alert(error)
    }
  }

  const pauseWebcam = () => {
    try {
      webcam.pause()
    } catch (error) {
      console.error('Error pausing webcam:', error)
    }
  }

  const updateWebcamFrames = () => {
    try {
      webcam.update()
    } catch (error) {
      console.error('Error updating webcam:', error)
    }
  }

  const playWebcam = async () => {
    try {
      await webcam.play()
    } catch (error) {
      console.error('Error pausing webcam:', error)
    }
  }

  return (
    <WebcamContext.Provider
      value={{
        webcam,
        isWebcamActive,
        activateWebcam,
        pauseWebcam,
        updateWebcamFrames,
        playWebcam,
      }}
    >
      {children}
    </WebcamContext.Provider>
  )
}

export const useWebcamContext = () => {
  const context = useContext(WebcamContext)
  if (!context) {
    throw new Error('useWebcamContext must be used within a WebcamProvider')
  }
  return context
}
