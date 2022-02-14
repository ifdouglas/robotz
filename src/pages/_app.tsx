import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'robotz/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
