import 'styles/globals.css'
import Layout from 'components/Layout/Layout'
import { SigningCosmWasmProvider } from 'contexts/cosmwasm'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'

import { store } from 'recoils/store'
import { Provider } from 'react-redux'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SigningCosmWasmProvider>
      <Layout>
        <RecoilRoot>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </RecoilRoot>
      </Layout>
    </SigningCosmWasmProvider>
  )
}
export default MyApp
