import React from 'react'
import Title from './Title'
import TipsList from './TipsList'
import { AnalysisContainer } from './styles'
import { ButtonStyled } from '../Enabler/styles'

type AnalyzingProps = {
  restartWebcamAndShapeAnalysisLoop: any
  detectedShape: string | null
  webcamContainer: any
}

const Analyzing: React.FC<AnalyzingProps> = ({
  restartWebcamAndShapeAnalysisLoop,
  detectedShape,
  webcamContainer,
}) => {
  return (
    <>
      <Title detectedShape={detectedShape} />
      <TipsList />

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
    </>
  )
}
export default Analyzing
