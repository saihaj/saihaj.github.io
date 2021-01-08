import SOCIAL_PROFILES from '../content/SocialProfiles'
import Icon from './SvgIcon'

const SocialIcons = () => (
  <div className="flex mt-8 justify-center space-x-3">
    {SOCIAL_PROFILES.map( items => <Icon key={items.url} {...items} /> )}
  </div>
)

export default SocialIcons
