import 'normalize.css'
import '../styles/global.css'
import Router from 'next/router'
import { Maven_Pro, Work_Sans } from 'next/font/google'
import type { AppProps } from 'next/app'
import { Footer, LayoutContainer } from '../styles/global.css'
import { Nav } from '../components/Nav'
import { useEffect } from 'react'
import { pageview } from '../lib/gtag'
import { Analytics } from '@vercel/analytics/react'

const mavenPro = Maven_Pro({
  style: ['normal'],
  weight: ['400'],
  variable: '--maven-pro',
  subsets: ['latin'],
})

const workSans = Work_Sans({
  style: ['normal'],
  weight: ['600'],
  variable: '--work-sans',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  // Analytics
  useEffect(() => {
    Router.events.on('routeChangeComplete', pageview)

    return () => {
      Router.events.off('routeChangeComplete', pageview)
    }
  }, [Router.events])
  return (
    <>
      <style jsx global>{`
        :root {
          --maven-pro: ${mavenPro.style.fontFamily};
          --work-sans: ${workSans.style.fontFamily};
        }
        html {
          font-family: ${mavenPro.style.fontFamily};
          font-size: 14px;
          font-weight: ${mavenPro.style.fontWeight};
        }
      `}</style>
      <Nav />
      <main className={LayoutContainer}>
        <Component {...pageProps} />
      </main>
      <footer className={Footer}>Saihajpreet Singh</footer>
      <Analytics />
    </>
  )
}
