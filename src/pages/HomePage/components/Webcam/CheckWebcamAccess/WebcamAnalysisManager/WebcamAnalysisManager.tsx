import { Enabler } from './Enabler'
import { ButtonStyled } from './Enabler/styles'
import * as tmImage from '@teachablemachine/image'
import React, { useEffect, useRef, useState } from 'react'
import { useModelContext } from '../../../../../../contexts/ModelContext'
import MagnifyingGlass from '../../../../../../assets/svgs/MagnifyingGlass'
import { TitleWithIcon, AnalysisContainer, List, ListContainer } from './styles'

// SEPARAR COMPONENTES NO RETURN
// TEM UM DELAY ATE A WEBCAM SER ACEITA NO BROWSER, ENTENDER COMO EXIBIR UM LOADING DURANTE ESSE DELAY.

const WebcamAnalysisManager: React.FC = () => {
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
      const webcamInstance = new tmImage.Webcam(600, 600, true)
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
          <>
            {!detectedShape ? (
              <div>
                <TitleWithIcon>
                  <div>
                    <MagnifyingGlass />
                  </div>
                  <div>
                    <h2>searching for shapes...!</h2>
                  </div>
                </TitleWithIcon>
              </div>
            ) : (
              <div>
                <TitleWithIcon>
                  <div>
                    <MagnifyingGlass />
                  </div>
                  <div>
                    <h2>{detectedShape}</h2>
                  </div>
                </TitleWithIcon>
              </div>
            )}
            <ListContainer>
              <h3>Tips</h3>
              <List>
                <li>
                  Shapes you <strong>can</strong> draw: 💛 Heart, ⚠️ Triangle,
                  🟡 Circle and ⭐️ Star.
                </li>
                <li>
                  <strong>
                    Hold your drawing steady in front of the camera
                  </strong>{' '}
                  for a few seconds to ensure it's detected.
                </li>
                <li>
                  Make sure your shape is clear and your face is out of the
                  frame to avoid distractions.
                </li>
              </List>
            </ListContainer>
          </>

          <AnalysisContainer>
            <div ref={webcamContainer}></div>
            {detectedShape && (
              <ButtonStyled
                onClick={async () => await restartWebcamAndShapeAnalysisLoop()}
              >
                Restart Shape Search
              </ButtonStyled>
            )}
          </AnalysisContainer>
        </div>
      ) : (
        <Enabler enableWebcam={enableWebcam} />
      )}
    </>
  )
}

export default WebcamAnalysisManager
