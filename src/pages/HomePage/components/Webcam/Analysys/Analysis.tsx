import React, { useEffect, useRef, useState } from 'react'
import * as tmImage from '@teachablemachine/image'
import { Enabler } from '../WebcamManager/Enabler'
import { useModelContext } from '../../../../../contexts/ModelContext'

const Analysis: React.FC = () => {
  const { predictWebcamShape, detectedShape } = useModelContext()
  const webcamCanvas = useRef<HTMLDivElement>(null)
  const webcamRef = useRef<tmImage.Webcam | null>(null) // Ref para a webcam

  const [isWebcamActive, setIsWebcamActive] = useState<boolean>(false)

  const requestIdRef = useRef<number | null>(null)
  const detectedShapeRef = useRef(detectedShape)

  useEffect(() => {
    detectedShapeRef.current = detectedShape
    if (detectedShape && requestIdRef.current !== null) {
      window.cancelAnimationFrame(requestIdRef.current)
      requestIdRef.current = null
    }
  }, [detectedShape])

  const enableWebcam = async () => {
    try {
      const webcam = new tmImage.Webcam(800, 800, true)
      webcamRef.current = webcam
      await webcam.setup()
      setIsWebcamActive(true)
      await webcam.play()

      if (webcamCanvas.current) {
        webcamCanvas.current.appendChild(webcam.canvas)
      }

      startShapeAnalysisLoop()
    } catch (error) {
      console.error('Error accessing webcam:', error)
    }
  }

  const startShapeAnalysisLoop = async () => {
    if (!detectedShapeRef.current) {
      console.log('está em loop')
      webcamRef.current?.update()
      await predictWebcamShape(webcamRef.current!)
      requestIdRef.current = window.requestAnimationFrame(
        startShapeAnalysisLoop
      )
    }
  }

  const handleRestart = () => {}

  return (
    <>
      {isWebcamActive ? (
        <div>
          <h2>{detectedShape ? detectedShape : '🔍 Analyzing...'}</h2>
          <div ref={webcamCanvas}></div>
        </div>
      ) : (
        <Enabler enableWebcam={enableWebcam} />
      )}
    </>
  )
}

export default Analysis
