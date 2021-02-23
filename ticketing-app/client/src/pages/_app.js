import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import axiosClient from '../utils/api'

import { Container, Main, Header } from '../components'

import theme from '../styles/theme'

const queryClient = new QueryClient()

const TicketingApp = ({ Component, pageProps, currentUser }) => (
  <ChakraProvider resetCSS theme={theme}>
    <ColorModeProvider
      options={{
        useSystemColorMode: true,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Container>
          <Main>
            <Header currentUser={currentUser?.email} />
            <Component {...pageProps} />
          </Main>
        </Container>
      </QueryClientProvider>
    </ColorModeProvider>
  </ChakraProvider>
)
TicketingApp.getInitialProps = async appContext => {
  const API = axiosClient(appContext.ctx.req)
  const { data } = await API.get('/users/currentuser')

  let pageProps = {}
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx.req)
  }

  return {
    pageProps,
    ...data,
  }
}

export default TicketingApp
