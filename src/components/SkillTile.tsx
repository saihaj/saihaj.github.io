import cx from 'classnames'

type SkillTileProp = {
  label: string,
  className?: string
}

const SkillTile = ( { label, className }:SkillTileProp ) => (
  <div className={cx(
    'px-6 bg-white rounded-lg',
    'text-theme-primary text-center text-md md:text-lg font-semibold',
    'my-1 mx-2',
    className,
  )}
  >
    {label}
  </div>
)

export default SkillTile
