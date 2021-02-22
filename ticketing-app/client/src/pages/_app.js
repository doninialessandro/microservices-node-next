import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Container, Main, Header } from '../components'

import theme from '../styles/theme'

const queryClient = new QueryClient()

const TicketingApp = ({ Component, pageProps }) => (
  <ChakraProvider resetCSS theme={theme}>
    <ColorModeProvider
      options={{
        useSystemColorMode: true,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Container>
          <Main>
            <Header />
            <Component {...pageProps} />
          </Main>
        </Container>
      </QueryClientProvider>
    </ColorModeProvider>
  </ChakraProvider>
)

export default TicketingApp
