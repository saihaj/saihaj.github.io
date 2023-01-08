import { ProjectSection } from '../components/Projects'
import { Seo } from '../components/Seo'
import {
  EXPLORATIONS,
  INACTIVE,
  MAINTAINER,
  NOT_SO_ACTIVE_MAINTAINER,
} from '../content/projects'

export default function Projects() {
  return (
    <>
      <Seo title="Projects" />
      <ProjectSection title="Maintainer" values={MAINTAINER} />
      <ProjectSection
        title="Sometimes help here and there"
        values={NOT_SO_ACTIVE_MAINTAINER}
      />
      <ProjectSection title="Some exploratory projects" values={EXPLORATIONS} />
      <ProjectSection title="Inactive" values={INACTIVE} />
    </>
  )
}
