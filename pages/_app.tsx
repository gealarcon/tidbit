import '../styles/globals.css'

import Navbar from '../components/navbar'

import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return <>
          <Navbar></Navbar>
          <Component {...pageProps} />
         <Toaster></Toaster>
        </>
}

export default MyApp
