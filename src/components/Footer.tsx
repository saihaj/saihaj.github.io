import PROFILES from '../content/SocialProfiles'
import { styled } from '../theme'
import Anchor from './Anchor'

const Ftr = styled( 'footer', {
  marginTop: 'auto',
  marginBottom: '1rem',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  '& > a:not(:first-of-type)': {
    marginLeft: '0.5rem',
  },
} )

const Footer = () => (
  <Ftr>
    {PROFILES.map( ( { name, url, svg: Icon } ) => (
      <Anchor key={url} aria-label={name} href={url}>
        <Icon />
      </Anchor>
    ) )}
  </Ftr>
)
export default Footer
