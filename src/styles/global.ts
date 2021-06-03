import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    /* color: var(--black-font); */
    outline: 0;
  }
  :root{
    --pink: #ED2786;
    --orange: #FF5F2D;
    --black-font: #393939;
    --gray: rgba(57, 57, 57, 0.5);
    --bg-primary: #F9F9F9;
    --white: #FFF;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background: var(--bg-primary);
    -webkit-font-smoothing: antialiased;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
`;