import styled from 'styled-components'

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  background-color: var(--header-color);

  & ul {
    margin: 0;
    padding: 0 1rem;
    list-style: none;
  }
`

export const HomeLink = styled.strong`
  font-size: 1.188rem;

  & a {
    color: var(--text-color);
  }

  & a:hover {
    color: var(--text-color);
  }
`

export const Credits = styled.li`
  display: flex;
  align-items: center;
`

export const HeartContainer = styled.span`
  display: inline-block;
  margin: 0 7px;
  position: relative;
  top: 5px;

  & svg {
    fill: #ff78ae;
  }
`
