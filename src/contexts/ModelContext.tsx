import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useRef,
} from 'react'
import * as tmImage from '@teachablemachine/image'

type ModelContextType = {
  model: tmImage.CustomMobileNet | null
  isModelLoading: boolean | null
  modelURL: string
  metadataURL: string
  predictWebcamShape: (webcam: tmImage.Webcam) => Promise<void>
  detectedShape: string | null
  resetShape: VoidFunction
  isResultModalOpen: boolean | null
  closeResultModal: VoidFunction
}

type Prediction = {
  probability: number
  className: string
}

const ModelContext = createContext<ModelContextType | undefined>(undefined)

const modelURL =
  'https://teachablemachine.withgoogle.com/models/pppV0B6Oj/model.json'
const metadataURL =
  'https://teachablemachine.withgoogle.com/models/pppV0B6Oj/metadata.json'

export const ModelProvider: React.FC<{
  children: ReactNode
}> = ({ children }) => {
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null)
  const [isModelLoading, setIsModelLoading] = useState<boolean>(true)
  const maxPredictions = model?.getTotalClasses() ?? 0
  const [stableFrames, setStableFrames] = useState<number>(0)
  const [lastPredictedClass, setLastPredictedClass] = useState<string | null>(
    null
  )
  const stableFramesRef = useRef<number>(stableFrames)
  const lastPredictedClassRef = useRef<string | null>(lastPredictedClass)

  const [detectedShape, setDetectedShape] = useState<string | null>(null)
  const [isResultModalOpen, setResultIsModalOpen] = useState<boolean | null>(
    false
  )

  useEffect(() => {
    stableFramesRef.current = stableFrames
  }, [stableFrames])

  useEffect(() => {
    lastPredictedClassRef.current = lastPredictedClass
  }, [lastPredictedClass])

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tmImage.load(modelURL, metadataURL)
        setModel(loadedModel)
      } catch (error) {
        console.error('Error loading model:', error)
      } finally {
        setIsModelLoading(false)
      }
    }

    loadModel()
  }, [modelURL, metadataURL])

  const matchClassRequirements = (predictionElement: Prediction) => {
    if (!!predictionElement.className) {
      return (
        predictionElement.probability >= 0.83 &&
        predictionElement.className !== 'Person'
      )
    }
  }

  const predictWebcamShape = async (webcam: tmImage.Webcam) => {
    const prediction = (await model?.predict(webcam.canvas)) ?? []

    let currentPredominantClass: string | null = null
    let currentMaxProbability = 0

    for (let i = 0; i < maxPredictions; i++) {
      const predictionElement = prediction[i]
      if (matchClassRequirements(predictionElement)) {
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

    if (stableFramesRef.current >= 25) {
      setDetectedShape(lastPredictedClassRef.current)
      setResultIsModalOpen(true)
      setStableFrames(0)
      setLastPredictedClass(null)
    }
  }

  const resetShape = () => setDetectedShape(null)
  const closeResultModal = () => setResultIsModalOpen(false)

  return (
    <ModelContext.Provider
      value={{
        model,
        isModelLoading,
        modelURL,
        metadataURL,
        predictWebcamShape,
        detectedShape,
        resetShape,
        isResultModalOpen,
        closeResultModal,
      }}
    >
      {children}
    </ModelContext.Provider>
  )
}

export const useModelContext = () => {
  const context = useContext(ModelContext)
  if (!context) {
    throw new Error('useModelContext must be used within a ModelProvider')
  }
  return context
}
