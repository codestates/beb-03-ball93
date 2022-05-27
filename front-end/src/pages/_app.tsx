import 'styles/globals.css'
import Layout from 'components/Layout/Layout'
import { SigningCosmWasmProvider } from 'contexts/cosmwasm'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SigningCosmWasmProvider>
      <Layout>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </Layout>
    </SigningCosmWasmProvider>
  )
}
export default MyApp
