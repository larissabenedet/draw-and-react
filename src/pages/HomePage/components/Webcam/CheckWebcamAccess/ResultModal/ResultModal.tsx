import ReactModal from 'react-modal'
import { useEffect, useState } from 'react'
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

  const [currentShapeCopy, setCurrentShapeCopy] = useState<any>({})

  useEffect(() => {
    if (detectedShape) setCurrentShapeCopy(getShapeCopyContent(detectedShape))
  }, [detectedShape])

  return (
    <StyledModal
      isOpen={isResultModalOpen}
      onRequestClose={() => closeResultModal()}
    >
      {currentShapeCopy && (
        <div>
          <h2>{currentShapeCopy.title}</h2>
          <p>{currentShapeCopy.description}</p>
          <ul>
            {currentShapeCopy.facts?.map((fact: string, index: number) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
          <button onClick={() => closeResultModal()}>Close Modal</button>
        </div>
      )}
    </StyledModal>
  )
}

export default ResultModal
