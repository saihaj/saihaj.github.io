import 'normalize.css'
import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { global } from '../theme'
import { pageview } from '../lib/gtag'

const globalStyles = global( {
  '*': {
    boxSizing: 'border-box',
  },
  html: {
    fontFamily: 'Rubik',
    fontSize: 14,
  },
  body: {
    backgroundColor: '$darkBlue',
    color: '$white',
    fontSize: '1.5rem',
  },
  '#__next': {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: '54rem',
    '@tablet': {
      padding: '0 0.6rem',
    },
  },
  a: {
    color: '$white',
    padding: 0,
    margin: 0,
    textDecorationThickness: '1.5',
    textDecorationStyle: 'dotted',
    textUnderlineOffset: '0.15rem',
    '&:hover': {
      color: '$white',
      '& svg > *': {
        stroke: '$yellow',
      },
    },
  },
  ':focus': {
    borderColor: '$red',
  },
  ':focus-visible': {
    outline: '$white solid 1px',
    borderColor: '$yellow',
  },
} )

const App = ( { Component, pageProps }: AppProps ) => {
  const router = useRouter()
  globalStyles()

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
