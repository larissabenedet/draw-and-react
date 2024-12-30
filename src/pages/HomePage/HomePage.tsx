import React from 'react'
import { HomeLink, Navbar } from './styles'

const HomePage = React.forwardRef<HTMLImageElement, {}>((props, ref) => {
  return (
    <>
      <header>
        <Navbar>
          <ul>
            <li>
              <HomeLink>
                <a href="/">AI Object Detection</a>
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
      <section>
        <h1>Welcome to AI Object Detection</h1>
        <p>
          Discover the power of artificial intelligence by analyzing images to
          detect objects in real-time. Upload an image or use your webcam to get
          started.
        </p>
      </section>
      <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quidem
        quae. Repudiandae voluptatum quos atque, labore sapiente a velit beatae
        at autem! Debitis fuga minima dolorem, omnis laborum autem nam!
      </main>
    </>
  )
})
export default HomePage
