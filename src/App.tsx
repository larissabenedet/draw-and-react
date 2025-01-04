import '@tensorflow/tfjs'
import React from 'react'
import { useModelContext } from './contexts/ModelContext'
import { LoadScreen } from './pages/LoadScreen'
import { HomePage } from './pages/HomePage'

const App: React.FC = () => {
  const { isModelLoading } = useModelContext()

  return isModelLoading ? <LoadScreen /> : <HomePage />
}

export default App
