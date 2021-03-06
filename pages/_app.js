import PortalLayout from '../components/Layouts/PortalLayout.js'
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PortalLayout>
        <Component {...pageProps} />
      </PortalLayout>
    </>
  )
}

export default MyApp
