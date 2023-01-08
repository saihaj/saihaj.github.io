import { isMacOs } from 'react-device-detect'

import Link from 'next/link'
import { LayoutContainer, LinkStyle, Paragraph } from '../styles/home.css'
import { Seo } from '../components/Seo'

const BioLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <Link
    href={href}
    className={LinkStyle}
    target="_blank"
    referrerPolicy="no-referrer"
  >
    {children}
  </Link>
)

export default function Home() {
  return (
    <>
      <Seo />
      <div className={LayoutContainer}>
        <p className={Paragraph}>
          I am an engineer interested in developer, infrastructure tooling and
          application development.
        </p>
        <p className={Paragraph}>
          I help maintain many open source projects at{' '}
          <BioLink href="https://github.com/graphql">GraphQL</BioLink>,{' '}
          <BioLink href="https://the-guild.dev">The Guild</BioLink>,{' '}
          <BioLink href="https://thegraph.com">TheGraph</BioLink>,{' '}
          <BioLink href="https://sound.xyz">Sound</BioLink> and{' '}
          <BioLink href="https://shabados.com">ShabadOS</BioLink>.
        </p>
        <p className={Paragraph}>
          Get in touch on{' '}
          <BioLink href="https://twitter.com/singh_saihaj">Twitter</BioLink> or{' '}
          <BioLink
            href={`${isMacOs ? 'imessage://' : 'mailto:'}chat@saihaj.dev`}
          >
            chat@saihaj.dev
          </BioLink>
        </p>
      </div>
    </>
  )
}
