import styled from 'styled-components'

export const Navbar = styled.nav`
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

export const Container = styled.div`
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 1rem;
`

export const SectionIntro = styled.section`
  margin-bottom: 8rem;
  text-align: center;

  & h1 {
    font-size: 2.5rem;
    color: var(--h1-color);
  }
`
