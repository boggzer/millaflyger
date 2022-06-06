import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
  }

  body {
    background: ${({ theme }) => theme.main.background};
    -webkit-overflow-scrolling: touch;
    margin: 0;
    font-style: normal;
    font-weight: 400;
    line-height: 1.35;
    box-sizing: border-box;
    ${({ theme }) => `
      font-family: ${theme.main.text.family.main};
      font-size: ${theme.main.text.sizes.base}px;`}
  }

  #root {
    --page-margin: ${({ theme }) => theme.main.pageMargin.mobile};
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media ${({ theme }) => theme.utils.mq.min.laptop} {
    --page-margin: ${({ theme }) => theme.main.pageMargin.desktop};
  }

  img {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    ${({ theme }) => `
      font-family: ${theme.main.text.family.heading};`}
  }

  ${({ theme }) => `
      ${Object.entries(theme.main.text.sizes.mobile)
        .map(
          ([key, value]) => `
          ${key} {
            font-size: ${value}px;
          }`,
        )
        .join(' ')}

      @media screen and ${theme.utils.mq.min.laptop} {
        ${Object.entries(theme.main.text.sizes.desktop)
          .map(
            ([key, value]) => `
          ${key} {
            font-size: ${value}px;
          }`,
          )
          .join(' ')}
      }
    `}

  button {
    border: none;
    appearance: none;
    padding: 0;
    background: none;
  }

  p:not(.heading),
  a:not(.heading) {
    letter-spacing: 0.3px;
    word-spacing: 0.5px;
  }

  a, a:active, a:visited, a:hover {
    text-decoration: none;
    color: #000000;
  }`;

export default GlobalStyle;
