import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  & ul {
    margin: 0;
    padding: 0 1rem;
    list-style: none;
  }
`

export const HomeLink = styled.strong`
  font-size: 19px;

  & a {
    color: var(--text-color);
  }

  & a:hover {
    color: var(--text-color);
  }
`
