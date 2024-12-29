import '@tensorflow/tfjs'
import { HomePage } from './pages/HomePage'
import { LoadScreen } from './pages/LoadScreen'
import * as cocoSsd from '@tensorflow-models/coco-ssd'
import React, { useEffect, useState } from 'react'

const App: React.FC = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false)

  useEffect(() => {
    const loadModelAndDetect = async () => {
      const model = await cocoSsd.load()
      console.log("🚀 ~ loadModelAndDetect ~ model:", model)
      setIsModelLoaded(true)

      // const predictions = await model.detect(imgRef.current)
      // console.log('Predictions: ', predictions)
    }

    loadModelAndDetect()
  }, [])
  return <>{isModelLoaded ? <HomePage /> : <LoadScreen />}</>
}

export default App
