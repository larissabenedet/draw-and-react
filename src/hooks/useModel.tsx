import '@tensorflow/tfjs'
import { useState, useEffect } from 'react'
import * as cocoSsd from '@tensorflow-models/coco-ssd'

export function useModel() {
  const [modelData, setModelData] = useState<cocoSsd.ObjectDetection | boolean>(
    false
  )

  useEffect(() => {
    const loadModel = async () => {
      const model = await cocoSsd.load()
      setModelData(model)
    }

    loadModel()
  }, [])
  return modelData
}
