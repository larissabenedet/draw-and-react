import styled from 'styled-components'

export const ButtonStyled = styled.button`
  border: none;
  border-radius: 0.313rem;
  color: var(--text-color);
  font-weight: bold;
  background: none;
  transition: all 0.16s ease-in;
  cursor: pointer;
  letter-spacing: 0.05rem;
  padding: 1rem 5rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  box-shadow: 0 0 0 0.063rem rgba(80, 80, 80, 0.5);
  margin-top: 0.313rem;

  &:hover {
    background: var(--yellow);
  }
`

export const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.938rem;
    fill: var(--title-color);
  }
`
