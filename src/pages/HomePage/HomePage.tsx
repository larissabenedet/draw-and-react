import React from 'react'
import { Container } from './styles'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { CheckWebcamAccess } from './components/Webcam/CheckWebcamAccess'

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <About />
        <CheckWebcamAccess />
      </Container>
    </>
  )
}
export default HomePage
