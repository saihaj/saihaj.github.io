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
          Every era of the internet has had its winners. Websites decided who
          got found. Then search rankings. Then social. Now it's AI. When a
          customer asks ChatGPT for a recommendation, only a few names come up,
          and there's no page two.
        </p>
        <p className={Paragraph}>
          I believe every small business deserves to be one of those names, not
          just the ones with enterprise budgets. That's why I'm building{' '}
          <BioLink href="https://rhetor.ai">Rhetor</BioLink>. Our flagship
          offering,{' '}
          <BioLink href="https://www.lighthouselocal.ai">
            Lighthouse Local
          </BioLink>
          , is where businesses and agencies manage their place in the AI era.
          See where you stand, who's winning instead, what to fix first, and
          track it all in one place. Around it, we build the rest of the stack.
          Agents that handle every call, chat, and follow-up, and custom
          engineering for the AI that runs the operation underneath.
        </p>
        <p className={Paragraph}>
          Before this, I was a founding engineer at{' '}
          <BioLink href="https://sound.xyz">Sound</BioLink>, worked on growth
          and product at <BioLink href="https://stellate.co">Stellate</BioLink>,
          the GraphQL edge platform now part of{' '}
          <BioLink href="https://the-guild.dev">The Guild</BioLink>, maintained
          tooling at <BioLink href="https://thegraph.com">The Graph</BioLink>,{' '}
          and supported <BioLink href="https://anyscale.com">Anyscale</BioLink>{' '}
          with growth. I contribute to open source, including projects under{' '}
          <BioLink href="https://the-guild.dev">The Guild</BioLink>,{' '}
          <BioLink href="https://graphql.org">GraphQL</BioLink>, and{' '}
          <BioLink href="https://shabados.com">ShabadOS</BioLink>. More on my{' '}
          <BioLink href="https://github.com/saihaj">Github</BioLink>.
        </p>
        <p className={Paragraph}>
          Get in touch on <BioLink href="https://x.com/saihaj">𝕏</BioLink> or{' '}
          <BioLink href={`${deviceOpener}chat@saihaj.dev`}>
            chat@saihaj.dev
          </BioLink>
        </p>
      </div>
    </>
  )
}
