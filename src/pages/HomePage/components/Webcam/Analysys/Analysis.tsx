import * as tmImage from '@teachablemachine/image'
import { Enabler } from '../WebcamManager/Enabler'
import React, { useEffect, useRef, useState } from 'react'
import { useModelContext } from '../../../../../contexts/ModelContext'

const Analysis: React.FC = () => {
  const { predictWebcamShape, detectedShape, resetShape } = useModelContext()
  const webcamContainer = useRef<HTMLDivElement>(null)
  const webcamElement = useRef<tmImage.Webcam | null>(null)
  const animationFrameIdRef = useRef<number | null>(null)
  const detectedShapeRef = useRef(detectedShape)

  const [isWebcamActive, setIsWebcamActive] = useState<boolean>(false)

  useEffect(() => {
    stopShapeAnalysisLoop()
  }, [detectedShape])

  const startShapeAnalysisLoop = async () => {
    if (!detectedShapeRef.current) {
      console.log('está em loop')
      webcamElement.current?.update()
      await predictWebcamShape(webcamElement.current!)
      animationFrameIdRef.current = window.requestAnimationFrame(
        startShapeAnalysisLoop
      )
    }
  }

  const stopShapeAnalysisLoop = () => {
    detectedShapeRef.current = detectedShape
    if (detectedShape && animationFrameIdRef.current !== null) {
      window.cancelAnimationFrame(animationFrameIdRef.current)
      animationFrameIdRef.current = null
    }
  }

  const startWebcam = async (webcam: tmImage.Webcam) => await webcam.play()
  const appendWebcamInContainer = async (
    webcam: tmImage.Webcam,
    container: HTMLDivElement
  ) => container.appendChild(webcam.canvas)

  const restartWebcamAndShapeAnalysisLoop = async () => {
    resetShape()
    if (webcamElement.current) await startWebcam(webcamElement.current)
    if (webcamElement.current && webcamContainer.current)
      await appendWebcamInContainer(
        webcamElement.current,
        webcamContainer.current
      )
    startShapeAnalysisLoop()
  }

  const enableWebcam = async () => {
    try {
      const webcamInstance = new tmImage.Webcam(800, 800, true)
      webcamElement.current = webcamInstance
      await webcamElement.current.setup()
      setIsWebcamActive(true)

      if (webcamElement.current) await startWebcam(webcamElement.current)
      if (webcamContainer.current)
        await appendWebcamInContainer(
          webcamElement.current,
          webcamContainer.current
        )
      startShapeAnalysisLoop()
    } catch (error) {
      console.error('Error accessing webcam:', error)
    }
  }

  return (
    <>
      {isWebcamActive ? (
        <div>
          <h2>{detectedShape ? detectedShape : '🔍 Analyzing...'}</h2>
          <div ref={webcamContainer} />
          <button
            onClick={async () => await restartWebcamAndShapeAnalysisLoop()}
          >
            Restart Webcam
          </button>
        </div>
      ) : (
        <Enabler enableWebcam={enableWebcam} />
      )}
    </>
  )
}

export default Analysis
