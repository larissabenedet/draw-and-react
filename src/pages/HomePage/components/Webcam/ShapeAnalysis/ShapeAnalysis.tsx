import { forwardRef, useEffect, useRef } from 'react'
import { Container, LiveView, VideoStyled } from './styles'
import { useModel } from '../../../../../hooks/useModel'

type ShapeAnalysisProps = {
  isWebcamActive: boolean
}

type Prediction = {
  class: string
  score: number
  bbox: [number, number, number, number]
}

const ShapeAnalysis = forwardRef<HTMLVideoElement, ShapeAnalysisProps>(
  ({ isWebcamActive }, ref) => {
    const modelData = useModel()
    const liveView = useRef()

    let children: HTMLElement[] = []

    const predictShapeDraw = () => {
      modelData.detect(ref?.current).then(function (predictions: Prediction[]) {
        for (let i = 0; i < children.length; i++) {
          liveView.current.removeChild(children[i])
        }
        children.splice(0)

        for (let n = 0; n < predictions.length; n++) {
          console.log('🚀 ~ predictions:', predictions)

          if (predictions[n].score > 0.66) {
            console.log('🚀 ~ predictions[n].score:', predictions[n].score)

            const p = document.createElement('p')
            p.innerText =
              predictions[n].class +
              ' - with ' +
              Math.round(parseFloat(predictions[n].score) * 100) +
              '% confidence.'
            p.style =
              'margin-left: ' +
              predictions[n].bbox[0] +
              'px; margin-top: ' +
              (predictions[n].bbox[1] - 10) +
              'px; width: ' +
              (predictions[n].bbox[2] - 10) +
              'px; top: 0; left: 0;'

            const highlighter = document.createElement('div')
            highlighter.setAttribute('class', 'highlighter')
            highlighter.style =
              'left: ' +
              predictions[n].bbox[0] +
              'px; top: ' +
              predictions[n].bbox[1] +
              'px; width: ' +
              predictions[n].bbox[2] +
              'px; height: ' +
              predictions[n].bbox[3] +
              'px;'

            if (liveView.current) {
              liveView.current.appendChild(highlighter)
              liveView.current.appendChild(p)
              children.push(highlighter)
              children.push(p)
            }
          }
        }

        window.requestAnimationFrame(predictShapeDraw)
      })
    }

    useEffect(() => {
      if (isWebcamActive && ref?.current) {
        ref?.current.addEventListener('loadeddata', predictShapeDraw)
      }
      return () => {
        if (ref?.current) {
          ref?.current.removeEventListener('loadeddata', predictShapeDraw)
        }
      }
    }, [isWebcamActive])

    return (
      <Container $isWebcamActive={isWebcamActive}>
        <h2>Now draw your favorite shape!</h2>
        <LiveView ref={liveView}>
          <VideoStyled muted ref={ref} playsInline />
        </LiveView>
      </Container>
    )
  }
)

export default ShapeAnalysis
