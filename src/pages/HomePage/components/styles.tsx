import styled from 'styled-components'

export const ButtonStyled = styled.button`
  display: block;
  margin-bottom: 1.5rem;
  width: 100%;
  background-color: var(--button-color);
  color: #fff;
  padding: 0.625rem 20rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.75rem;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056d6;
  }
`
