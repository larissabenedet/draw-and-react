import styled from 'styled-components'

export const Container = styled.div`
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 1rem;
`

export const SectionIntro = styled.section`
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: solid 1px var(--header-color);

  & h1 {
    font-size: 2.5rem;
    color: var(--h1-color);
  }
`

export const List = styled.ul`
  text-align: left;
  margin: 2.5rem 0;
  letter-spacing: 0.5px;
  padding: 0;

  & li {
    list-style: none;
    margin-bottom: 0.645rem;
    display: flex;
    align-items: center;

    & svg {
      fill: #34b233;
      margin-right: 0.625rem;
    }
  }
`

export const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    margin-right: 0.938rem;
    fill: var(--title-color);
  }
`
