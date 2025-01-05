import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  50% {
    fill: var(--header-color);
  }
  to {
    fill: var(--text-color);
  }
`

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`

const blink = keyframes`
  50% {
    border-color: transparent;
  }
  to {
    border-color: var(--text-color);
  }
`

export const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;

  h2 {
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid var(--text-color);
    animation: ${typing} 4s steps(30, end), ${blink} 0.5s step-end infinite;
  }

  svg {
    margin-right: 0.938rem;
    fill: var(--title-color);

    path {
      animation: ${pulse} 2s infinite linear;

      &:nth-of-type(n) {
        animation-delay: calc(-0.083s * (n - 1));
      }
    }
  }
`

export const AnalysisContainer = styled.div`
  margin: 0 auto;
  text-align: center;

  & button {
    margin: 40px 0;
  }
`

export const ListContainer = styled.div`
  text-align: center;

  & h3 {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
`

export const List = styled.ul`
  padding: 0;
  list-style-type: decimal;

  & li {
    margin-bottom: 0.645rem;
    list-style-position: inside;
    text-align: center;
  }
`
