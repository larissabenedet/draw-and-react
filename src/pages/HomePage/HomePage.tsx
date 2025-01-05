import React from 'react'
import Check from '../../assets/svgs/Check'
import { Navbar } from './components/Navbar'
import Painting from '../../assets/svgs/Painting'
import { Container, List, SectionIntro, TitleWithIcon } from './styles'
import { CheckWebcamAccess } from './components/Webcam/CheckWebcamAccess'

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <SectionIntro>
          <TitleWithIcon>
            <div>
              <Painting />
            </div>
            <div>
              <h1>draw shapes, see reactions</h1>
            </div>
          </TitleWithIcon>

          <span>
            Draw simple geometric shapes
            <strong> directly in your webcam</strong> and watch the magic
            happen! Experience background changes, sounds, and more as you
            explore <strong>real-time AI</strong>.
          </span>
          <List>
            <li>
              <Check /> No data is stored or shared.
            </li>
            <li>
              <Check /> All processing happens locally in your browser.
            </li>
            <li>
              <Check /> 100% safe and private.
            </li>
          </List>
        </SectionIntro>
        <CheckWebcamAccess />
      </Container>
    </>
  )
}
export default HomePage
