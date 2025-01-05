import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  50% {
    fill: var(--header-color);
  }
  to {
    fill: var(--text-color);
  }
`

const iosIntro = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff86;
  animation: ${iosIntro} 0.6s;
  transition: all;

  & svg {
    fill: var(--title-color);
    display: block;
    margin: 0 auto;

    path {
      animation: ${pulse} 1s infinite linear;

      &:nth-of-type(n) {
        animation-delay: calc(-0.083s * (n - 1));
      }
    }
  }
`

export const LoadTitle = styled.h1`
  color: var(--title-color);
  font-weight: 500;
  letter-spacing: 1px;
`
