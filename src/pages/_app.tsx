import { useEffect } from 'react'
import { AppProps } from 'next/app'
import 'normalize.css'
import { jss } from 'react-jss'

import { globalStyles } from '../theme'

jss.createStyleSheet( globalStyles ).attach()

const App = ( { Component, pageProps }: AppProps ) => {
  useEffect( () => {
    const style = document.getElementById( 'server-side-styles' )

    if ( style ) {
      style?.parentNode?.removeChild( style )
    }
  }, [] )

  return (
    <Component {...pageProps} />
  )
}
export default App
