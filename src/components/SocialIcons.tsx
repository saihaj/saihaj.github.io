import { AnchorHTMLAttributes } from 'react'
import SOCIAL_PROFILES from '../content/SocialProfiles'

type IconProps ={
  url: AnchorHTMLAttributes<HTMLAnchorElement>['href']
  svg: string // see types.d.ts
}

const Icon = ( { url, svg: Svg }:IconProps ) => (
  <a aria-label={url} href={url} target="_blank" rel="noreferrer" className="fill-current text-white hover:text-gray-400">
    <Svg />
  </a>
)

const SocialIcons = () => (
  <div className="flex mt-8 justify-center space-x-3">
    {SOCIAL_PROFILES.map( items => <Icon key={items.url} {...items} /> )}
  </div>
)

export default SocialIcons
