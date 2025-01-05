import React from 'react'
import Wait from '../../assets/svgs/Wait'
import { Container, LoadTitle } from './styles'

const LoadScreen: React.FC = () => {
  return (
    <Container>
      <div>
        <LoadTitle>
          wait until the shape detection model is fully loaded...
        </LoadTitle>
        <Wait />
      </div>
    </Container>
  )
}
export default LoadScreen
