import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const theme = {
  font: {
    sans: 'Inter, sans-serif',
    serif: 'Georgia, sans',
    monospace: '"Source Code Pro", monospace',
  },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
`