import React from 'react'
import { Container, LoadTitle } from './styles'
import { Loader } from '../../assets/images/Loader'

const LoadScreen: React.FC = () => {
  return (
    <Container>
      <div>
        <LoadTitle>wait until COCO-SSD model finishes loading...</LoadTitle>
        <Loader />
      </div>
    </Container>
  )
}
export default LoadScreen
