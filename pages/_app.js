import { Provider } from 'react-redux'
import Head from 'next/head'
import { store } from '../src/app/store'

import '../src/styles/globals.css'
import '../src/styles/variable.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
