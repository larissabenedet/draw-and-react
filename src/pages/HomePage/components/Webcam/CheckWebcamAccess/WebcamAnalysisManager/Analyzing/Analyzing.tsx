import Title from './Title'
import TipsList from './TipsList'
import { AnalysisContainer } from './styles'
import React, { useEffect, useRef, useState } from 'react'
import { ButtonStyled } from '../ActivateWebcamPermission/styles'
import { useModelContext } from '../../../../../../../contexts/ModelContext'
import { useWebcamContext } from '../../../../../../../contexts/WebcamContext'

const Analyzing: React.FC = () => {
  const { webcam, pauseWebcam, updateWebcamFrames, playWebcam } =
    useWebcamContext()
  const { predictWebcamShape, detectedShape, resetShape } = useModelContext()

  const containerRef = useRef<HTMLDivElement>(null)
  const detectedShapeRef = useRef<string | null>(detectedShape)

  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null)
  const [isCanvasLoading, setIsCanvasLoading] = useState<boolean | null>(true)

  useEffect(() => {
    if (containerRef.current && webcam)
      containerRef.current.appendChild(webcam.canvas)
    startShapeAnalysisLoop()
    setIsCanvasLoading(false)
  }, [])

  useEffect(() => {
    if (detectedShape) stopShapeAnalysisLoop()
  }, [detectedShape])

  const startShapeAnalysisLoop = async () => {
    if (!detectedShapeRef.current) {
      updateWebcamFrames()
      await predictWebcamShape(webcam)
      setAnimationFrameId(window.requestAnimationFrame(startShapeAnalysisLoop))
    }
  }

  const stopShapeAnalysisLoop = () => {
    detectedShapeRef.current = detectedShape // seta a ref com o valor mais atualizado

    if (detectedShape && animationFrameId !== null) {
      pauseWebcam()
      window.cancelAnimationFrame(animationFrameId)

      setAnimationFrameId(null)
    }
  }

  const restartWebcamAndShapeAnalysisLoop = async () => {
    detectedShapeRef.current = null // seta a ref com o valor mais atualizado

    resetShape()
    playWebcam()
    startShapeAnalysisLoop()
  }

  return (
    <>
      {isCanvasLoading ? (
        <h2>loading...</h2>
      ) : (
        <Title detectedShape={detectedShape} />
      )}

      <TipsList />
      <AnalysisContainer>
        {isCanvasLoading && <h2>loading...</h2>}
        <div ref={containerRef} />
        {detectedShape && (
          <ButtonStyled
            onClick={async () => await restartWebcamAndShapeAnalysisLoop()}
          >
            Restart Shape Search
          </ButtonStyled>
        )}
      </AnalysisContainer>
    </>
  )
}
export default Analyzing
