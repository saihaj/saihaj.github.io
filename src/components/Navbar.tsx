import Image from 'next/image'

import { styled } from '../theme'
import Button from './Button'
import Link from './Anchor'

const Main = styled( 'div', {
  marginTop: '3rem',
  display: 'flex',
  marginBottom: '4rem',
  '@tablet': {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 0,
  },
} )

const Img = styled( Image, {
  borderRadius: '9999px',
  borderColor: '$yellow !important',
  borderWidth: '0.15rem !important',
  borderStyle: 'solid !important',
} )

const Name = styled( 'h1', {
  margin: 0,
  padding: 0,
  fontFamily: 'Fugaz One',
  fontSize: '2.2rem',
  '& a': {
    textDecoration: 'none',
  },
} )

const NavWrapper = styled( 'div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: '2rem',
  '@tablet': {
    marginLeft: 0,
    marginTop: '0.5rem',
    alignItems: 'center',
    marginBottom: '3rem',
  },
} )

const Nav = styled( 'nav', {
  marginTop: '0.5rem',
  display: 'flex',
  alignContent: 'center',
  '& > button:not(:first-of-type)': {
    marginLeft: '1.5rem',
  },
} )

const Navbar = () => (
  <Main>
    <Img alt="Saihaj Headshot" src="/images/me.png" width={120} height={120} quality={100} priority layout="fixed" />
    <NavWrapper>
      <Name>
        <Link href="/">
          Saihajpreet Singh
        </Link>
      </Name>
      <Nav>
        <Link href="/projects"><Button>Projects</Button></Link>
        <Link href="/resume"><Button>Resume</Button></Link>
      </Nav>
    </NavWrapper>
  </Main>
)

export default Navbar
