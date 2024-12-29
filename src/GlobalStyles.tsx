import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --light-color: #E4E0E1;
    --tertiary-color: #D6C0B3;
    --secondary-color: #AB886D;
    --primary-color: #493628;
    font-size: 16px;
    font-family: "Poppins", serif;
    font-weight: 400;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--light-color);
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d6c0b3' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
    color: var(--primary-color);
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default GlobalStyle
