import { createUseStyles } from 'react-jss'
import Anchor from '../components/Anchor'
import Layout from '../components/Layout'
import { GithubIcon } from '../components/SocialIcons'
import { Breakpoints, Colors, widthLessThan } from '../theme'
import PROJECTS from '../content/projects.json'

const useStyles = createUseStyles( {
  card: {
    borderColor: Colors.yellow,
    borderWidth: 1,
    borderStyle: 'solid',
    '& h3, p': {
      margin: 0,
    },
    '& p': {
      fontSize: '1.2rem',
      color: Colors.grey,
    },
    padding: '0.8rem 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '2rem',
    rowGap: '1rem',
    [ widthLessThan( Breakpoints.tablet ) ]: {
      gridTemplateColumns: 'repeat(1,1fr)',
    },
  },
} )

type CardProps = {
  name: string,
  title:string,
  github:string
}

const Card = ( { name, title, github }:CardProps ) => {
  const styles = useStyles()

  return (
    <div className={styles.card}>
      <div>
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
      <Anchor href={github}>
        <GithubIcon width={30} height={30} />
      </Anchor>
    </div>
  )
}

const Work = () => {
  const styles = useStyles()

  return (
    <Layout title="Projects" className={styles.main}>
      {PROJECTS.values.map( ( { name, role, github } ) => (
        <Card key={name} name={name} title={role} github={github} />
      ) )}
    </Layout>
  )
}

export default Work
