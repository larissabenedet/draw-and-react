import '@tensorflow/tfjs'
import React from 'react'
import { HomePage } from './pages/HomePage'
import { useModel } from './hooks/useModel'
import { LoadScreen } from './pages/LoadScreen'

const App: React.FC = () => {
  const modelData = useModel()

  return !!modelData ? <HomePage /> : <LoadScreen />
}

export default App
