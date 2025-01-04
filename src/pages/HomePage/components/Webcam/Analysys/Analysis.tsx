import * as tmImage from '@teachablemachine/image'
import { Enabler } from '../WebcamManager/Enabler'
import React, { useRef, useState, useEffect } from 'react'
import { useModelContext } from '../../../../../contexts/ModelContext'

const Analysis: React.FC = () => {
  const { model } = useModelContext()
  const webcamCanvas = useRef<HTMLDivElement>(null)
  const webcam = new tmImage.Webcam(800, 800, true)
  const maxPredictions = model?.getTotalClasses() ?? 0

  const [isWebcamActive, setIsWebcamActive] = useState(false)
  const [stableFrames, setStableFrames] = useState(0)
  const [lastPredictedClass, setLastPredictedClass] = useState<string | null>(
    null
  )

  const stableFramesRef = useRef(stableFrames)
  const lastPredictedClassRef = useRef(lastPredictedClass)

  useEffect(() => {
    stableFramesRef.current = stableFrames
  }, [stableFrames])

  useEffect(() => {
    lastPredictedClassRef.current = lastPredictedClass
  }, [lastPredictedClass])

  const enableWebcam = async () => {
    try {
      await webcam.setup()
      setIsWebcamActive(true)
      await webcam.play()

      webcamCanvas.current && webcamCanvas.current.appendChild(webcam.canvas)
      window.requestAnimationFrame(loop)
    } catch (error) {
      console.error('Error accessing webcam:', error)
    }
  }

  async function loop() {
    webcam.update()
    await predict()
    window.requestAnimationFrame(loop)
  }

  async function predict() {
    const prediction = (await model?.predict(webcam.canvas)) ?? []

    let currentPredominantClass: string | null = null
    let currentMaxProbability = 0

    for (let i = 0; i < maxPredictions; i++) {
      const predictionElement = prediction[i]
      if (
        predictionElement.probability >= 0.83 &&
        predictionElement.className !== 'Person'
      ) {
        if (predictionElement.probability > currentMaxProbability) {
          currentMaxProbability = predictionElement.probability
          currentPredominantClass = predictionElement.className
        }
      }
    }

    if (
      currentPredominantClass &&
      currentPredominantClass === lastPredictedClassRef.current
    ) {
      setStableFrames((prev) => prev + 1)
    } else {
      setStableFrames(0)
    }

    setLastPredictedClass(currentPredominantClass)

    if (stableFramesRef.current >= 30) {
      alert(`Forma predominante detectada: ${currentPredominantClass}`)
      setStableFrames(0)
      setLastPredictedClass(null)
    }
  }

  return (
    <>
      {isWebcamActive ? (
        <div>
          <h2>🔍 Analyzing...</h2>
          <div ref={webcamCanvas}></div>
        </div>
      ) : (
        <Enabler enableWebcam={enableWebcam} />
      )}
    </>
  )
}

export default Analysis
