import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import * as tmImage from '@teachablemachine/image'

interface ModelContextType {
  model: tmImage.CustomMobileNet | null
  isModelLoading: boolean
  modelURL: string
  metadataURL: string
}

const ModelContext = createContext<ModelContextType | undefined>(undefined)

const modelURL =
  'https://teachablemachine.withgoogle.com/models/ZRvU06r7G/model.json'
const metadataURL =
  'https://teachablemachine.withgoogle.com/models/ZRvU06r7G/metadata.json'

export const ModelProvider: React.FC<{
  children: ReactNode
}> = ({ children }) => {
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null)
  const [isModelLoading, setIsModelLoading] = useState(true)

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

  return (
    <ModelContext.Provider
      value={{ model, isModelLoading, modelURL, metadataURL }}
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
