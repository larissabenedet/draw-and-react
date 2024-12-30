import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --h1-color: hsl(205, 20%, 94%);
    --text-color: hsl(205, 16%, 77%);
    --blue: hsl(195, 85%, 41%);
    --blue-hover: hsl(195, 80%, 50%);
    --transition: 0.2s ease-in-out;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #11191f;
    color: var(--text-color);
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 19px;
  }

  a {
    color: var(--blue);
    text-decoration: none;
    transition: background-color var(--transition), color var(--transition), text-decoration var(--transition), box-shadow var(--transition), -webkit-text-decoration var(--transition);

    &:hover {
      text-decoration: none;
      color: var(--blue-hover);
    }
  }
`

export default GlobalStyle
