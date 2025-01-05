import React from 'react'
import { HomeLink, NavbarStyled } from './styles'

const Navbar: React.FC = () => {
  return (
    <header>
      <NavbarStyled>
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
      </NavbarStyled>
    </header>
  )
}

export default Navbar
