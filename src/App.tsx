import '@tensorflow/tfjs'
import React from 'react'
import { HomePage } from './pages/HomePage'
import { LoadScreen } from './pages/LoadScreen'
import { useModelContext } from './contexts/ModelContext'

const App: React.FC = () => {
  const { isModelLoading } = useModelContext()

  return isModelLoading ? <LoadScreen /> : <HomePage />
}

export default App
