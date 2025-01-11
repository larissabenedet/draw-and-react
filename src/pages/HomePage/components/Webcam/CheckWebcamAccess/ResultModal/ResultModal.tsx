import ReactModal from 'react-modal'
import { useEffect, useState } from 'react'
import Close from '../../../../../../assets/svgs/Close'
import RisingShapes from '../../../Animations/RisingShapes'
import { AnimatedDiv } from '../../../Animations/AnimatedDiv'
import { FactsList, ModalContent, StyledButton } from './styles'
import { getShapeCopyContent } from '../../../../../../utils/shapesCopy'
import { useModelContext } from '../../../../../../contexts/ModelContext'

const Modal = ReactModal as any

const StyledModal = (props: any) => (
  <Modal
    {...props}
    overlayClassName="modal-overlay"
    className="modal-content"
  />
)

const ResultModal = () => {
  const { detectedShape, isResultModalOpen, closeResultModal } =
    useModelContext()

  const [currentShapeCopy, setCurrentShapeCopy] = useState<{
    title?: string;
    description?: string;
    video?: string;
    facts?: string[];
  }>({})

  useEffect(() => {
    if (detectedShape) {
      setCurrentShapeCopy(getShapeCopyContent(detectedShape))
    }
  }, [detectedShape])

  return (
    <>
      {isResultModalOpen && detectedShape && (
        <RisingShapes shapeElement={detectedShape} />
      )}
      <StyledModal
        isOpen={isResultModalOpen}
        onRequestClose={() => closeResultModal()}
      >
        {currentShapeCopy && (
          <ModalContent>
            <AnimatedDiv>
              <h2>{currentShapeCopy.title}</h2>
            </AnimatedDiv>
            <AnimatedDiv>
              <p>{currentShapeCopy.description}</p>
            </AnimatedDiv>
            <AnimatedDiv>
              <AnimatedDiv>
                <iframe
                  key={currentShapeCopy.video}
                  src={currentShapeCopy.video}
                  width="600"
                  height="350"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Video"
                />
              </AnimatedDiv>
            </AnimatedDiv>
            <AnimatedDiv>
              <FactsList $detectedShape={detectedShape}>
                {currentShapeCopy.facts?.map((fact: string, index: number) => (
                  <li key={index}>{fact}</li>
                ))}
              </FactsList>
            </AnimatedDiv>

            <AnimatedDiv>
              <StyledButton onClick={() => closeResultModal()}>
                <Close />
              </StyledButton>
            </AnimatedDiv>
          </ModalContent>
        )}
      </StyledModal>
    </>
  )
}

export default ResultModal
