import React from 'react'
import { AllContent } from './components/Webcam/AllContent'
import { Container, HomeLink, Navbar, SectionIntro } from './styles'

const HomePage: React.FC = () => {
  return (
    <>
      <header>
        <Navbar>
          <ul>
            <li>
              <HomeLink>
                <a href="/">Draw & React</a>
              </HomeLink>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://github.com/larissabenedet" target="_blank">
                Made with ❤️ by lari
              </a>
            </li>
          </ul>
        </Navbar>
      </header>
      <Container>
        <SectionIntro>
          <h1>✍🏻 Draw shapes, see reactions</h1>
          <span>
            Draw simple geometric shapes
            <strong> directly in your webcam</strong> and watch the magic
            happen! Experience background changes, sounds, and more as you
            explore <strong>real-time AI</strong>.
          </span>
          <ul>
            <li>✔️ No data is stored or shared.</li>
            <li>✔️ All processing happens locally in your browser.</li>
            <li>✔️ 100% safe and private.</li>
          </ul>
        </SectionIntro>
        <AllContent />
      </Container>
    </>
  )
}
export default HomePage
