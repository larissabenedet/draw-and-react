import React from 'react'
import { Credits, HeartContainer, HomeLink, NavbarStyled } from './styles'
import Heart from '../../../../assets/svgs/Heart'

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
          <Credits>
            <a href="https://github.com/larissabenedet" target="_blank">
              <span>Made with</span>
              <HeartContainer>
                <Heart />
              </HeartContainer>
              <span>by lari</span>
            </a>
          </Credits>
        </ul>
      </NavbarStyled>
    </header>
  )
}

export default Navbar
