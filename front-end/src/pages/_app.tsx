import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout/Layout'
import { SigningCosmWasmProvider } from 'contexts/cosmwasm'

import { store } from 'store/store'
import { Provider } from 'react-redux'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SigningCosmWasmProvider>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </SigningCosmWasmProvider>
  )
}
export default MyApp
