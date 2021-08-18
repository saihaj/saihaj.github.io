import Anchor from '../components/Anchor'
import Layout from '../components/Layout'
import { GithubIcon } from '../components/SocialIcons'
import { css, styled } from '../theme'
import PROJECTS from '../content/projects.json'

const CardComponent = styled( 'div', {
  borderColor: '$yellow',
  borderWidth: 1,
  borderStyle: 'solid',
  '& h3, p': {
    margin: 0,
  },
  '& p': {
    fontSize: '1.2rem',
    color: '$grey',
  },
  padding: '0.8rem 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
} )

type CardProps = {
  name: string,
  title:string,
  github:string
}

const Card = ( { name, title, github }:CardProps ) => (
  <CardComponent>
    <div>
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
    <Anchor href={github}>
      <GithubIcon width={30} height={30} />
    </Anchor>
  </CardComponent>
)

const main = css( {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: '2rem',
  rowGap: '1rem',
  '@tablet': {
    gridTemplateColumns: 'repeat(1,1fr)',
  },
} )

const Work = () => (
  <Layout title="Projects" className={main()}>
    {PROJECTS.values.map( ( { name, role, github } ) => (
      <Card key={name} name={name} title={role} github={github} />
    ) )}
  </Layout>
)

export default Work
