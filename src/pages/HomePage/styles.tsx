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

export const MainContent = styled.main`
  & h2 {
    font-size: 1.75rem;
    margin: 0 0 1rem 0;
  }

  & h3 {
    color: var(--p-color);
    font-weight: 400;
    font-size: 1rem;
  }

  & p {
    margin: 2.75rem 0;
  }
`
