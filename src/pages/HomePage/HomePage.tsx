import React from 'react'
import { Container } from './styles'

const HomePage = React.forwardRef<HTMLImageElement, {}>((props, ref) => {
  return (
    <Container>
      <div>Choose Random Image</div>
      <div>Photo Preview</div>
      <div>Enable Webcam</div>
    </Container>
  )
})
export default HomePage
