import 'normalize.css'
import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { jss } from 'react-jss'

import { globalStyles } from '../theme'
import { pageview } from '../lib/gtag'

jss.createStyleSheet( globalStyles ).attach()

const App = ( { Component, pageProps }: AppProps ) => {
  const router = useRouter()

  // Run once to setup react-jss
  useEffect( () => {
    const style = document.getElementById( 'server-side-styles' )

    if ( style ) {
      style?.parentNode?.removeChild( style )
    }
  }, [] )

  // Analytics
  useEffect( () => {
    router.events.on( 'routeChangeComplete', pageview )

    return () => {
      router.events.off( 'routeChangeComplete', pageview )
    }
  }, [ router.events ] )

  return <Component {...pageProps} />
}

export default App
