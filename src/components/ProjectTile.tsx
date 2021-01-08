import cx from 'classnames'

import SvgIcon from './SvgIcon'
import Github from '../../static/svg/github.inline.svg'

type ProjectTileProps = {
  title: string
  className?: string
  projectUrl: string
}

const ProjectTile = ( { className, title, projectUrl }:ProjectTileProps ) => (
  <div className={cx(
    'w-60 h-20 p-1',
    'flex flex-col items-center',
    'bg-theme-secondary rounded-lg',
    className,
  )}
  >
    <h3 className="text-xl text-center font-fugaz mb-2">{title}</h3>
    <SvgIcon url={projectUrl} svg={Github} className="hover:text-yellow-300" />
  </div>
)

export default ProjectTile
