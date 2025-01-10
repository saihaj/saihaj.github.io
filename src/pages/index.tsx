import Link from 'next/link'
import { isMacOs, isIOS } from 'react-device-detect'
import { LayoutContainer, LinkStyle, Paragraph } from '../styles/home.css'
import { Seo } from '../components/Seo'
import { useEffect, useState } from 'react'

const BioLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  const url = new URL(href)
  if (url.protocol.startsWith('http')) {
    url.searchParams.set('utm_source', 'saihaj.dev')
    url.searchParams.set('utm_medium', 'bio')
    url.searchParams.set('utm_campaign', 'bio-link')
  }
  const link = url.toString()

  return (
    <Link
      href={link}
      className={LinkStyle}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      {children}
    </Link>
  )
}

export default function Home() {
  const [deviceOpener, setDeviceOpener] = useState<'imessage://' | 'mailto:'>(
    'mailto:',
  )

  // This ensure that on client side we set the correct opener
  useEffect(() => {
    if (isMacOs || isIOS) {
      setDeviceOpener('imessage://')
    }
  }, [])

  return (
    <>
      <Seo />
      <div className={LayoutContainer}>
        <p className={Paragraph}>
          I'm an engineer focused on building developer tools, infrastructure,
          and application solutions, while experimenting with practical AI
          applications. Always accelerating efficiently.
        </p>
        <p className={Paragraph}>
          I actively contribute to and help maintain several open-source
          projects, including those under{' '}
          <BioLink href="https://the-guild.dev">The Guild</BioLink>,{' '}
          <BioLink href="https://github.com/graphql">GraphQL</BioLink>,{' '}
          <BioLink href="https://shabados.com">ShabadOS</BioLink>, and{' '}
          <BioLink href="https://sound.xyz">Sound</BioLink>. Previously, I was a
          maintaining tooling at{' '}
          <BioLink href="https://thegraph.com">The Graph</BioLink>. Check out my{' '}
          <BioLink href="https://github.com/saihaj">Github</BioLink> for more.
        </p>
        <p className={Paragraph}>
          Beyond open source, I manage{' '}
          <BioLink href="https://stellate.co">Stellate</BioLink>, the GraphQL
          edge platform by{' '}
          <BioLink href="https://the-guild.dev">The Guild</BioLink>, and support{' '}
          <BioLink href="https://anyscale.com">Anyscale</BioLink> with Growth
          Engineering.
        </p>
        <p className={Paragraph}>
          Get in touch on <BioLink href="https://x.com/singh_saihaj">𝕏</BioLink>{' '}
          or{' '}
          <BioLink href={`${deviceOpener}chat@saihaj.dev`}>
            chat@saihaj.dev
          </BioLink>
        </p>
      </div>
    </>
  )
}
