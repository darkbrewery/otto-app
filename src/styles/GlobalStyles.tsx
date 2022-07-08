import { createGlobalStyle } from 'styled-components/macro'
import cursorDefault from 'assets/cursor-default.png'
import cursorPointer from 'assets/cursor-pointer.png'
import bg from 'assets/bg.jpg'

const GlobalStyle = createGlobalStyle`
    :root {
      --real-vh: 100vh;
      --header-height: 68px;
      --footer-height: 50px;
      --body-height: calc(var(--real-vh) - var(--header-height) - var(--footer-height) - env(safe-area-inset-bottom));

      @media ${({ theme }) => theme.breakpoints.mobile} {
        --header-height: 100px;
      }
    }

    body {
      cursor: url(${cursorDefault.src}), auto;
      color: ${({ theme }) => theme.colors.otterBlack};
      background: center / cover no-repeat url(${bg.src});
      height: var(--real-vh);
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button {
        background: none;
        border: none;
        outline: none;
        cursor: url(${cursorPointer.src}) 7 0 ,auto;

        :disabled {
            cursor: url(${cursorDefault.src}), auto;
        }
    }

    input {
        border: none;
        outline: none;
    }

    a {
        color: unset;
        text-decoration: none;
        cursor: url(${cursorPointer.src}) 7 0 ,auto;
    }

    @font-face {
        font-family: 'Pangolin';
        src: url('/fonts/Pangolin-Regular.ttf') ;
    }

    @font-face {
        font-family: 'PaytoneOne';
        src: url('/fonts/paytoneone-regular.woff2') format('woff2');
    }

    @font-face {
        font-family: naikaifont;
        src: url(https://cdn.jsdelivr.net/gh/max32002/naikaifont@1.0/webfont/NaikaiFont-Regular-Lite.woff2) format("woff2")
        , url(https://cdn.jsdelivr.net/gh/max32002/naikaifont@1.0/webfont/NaikaiFont-Regular-Lite.woff) format("woff");
    }
`

function GlobalStyles(): JSX.Element {
  return <GlobalStyle />
}

export default GlobalStyles
