import { createGlobalStyle } from 'styled-components'

const cores = {
  branco: '#eeeeee',
  preto: '#111',
  cinza: '#333',
  azul: '#19a1f9'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body{
    background-color: ${cores.preto};
    color: ${cores.branco};
  }
`
