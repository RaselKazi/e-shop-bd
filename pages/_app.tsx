import '../styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { NextPage } from 'next'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { StoreProvider } from '../utils/Store'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <QueryClientProvider client={new QueryClient()}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </QueryClientProvider>
  )
}

export default MyApp
