import Layout from '../components/Layout'
import SKILLS from '../content/Skills'
import { styled } from '../theme'

const SkillsUL = styled( 'ul', {
  margin: 0,
  padding: 0,
} )

const SkillTitle = styled( 'h3', {
  marginBottom: '0.5rem',
} )

const Skills = () => (
  <>
    <h2>Skills</h2>
    {Object.keys( SKILLS ).map( skill => (
      <div key={skill}>
        <SkillTitle>{skill}</SkillTitle>
        <SkillsUL>
          {( SKILLS[ skill as keyof typeof SKILLS ] ).sort( ( a, b ) => a.localeCompare( b ) ).reduce( ( acc, item ) => `${acc}, ${item}` )}
        </SkillsUL>
      </div>
    ) )}
  </>
)

const Resume = () => (
  <Layout title="Resume">
    <Skills />
  </Layout>
)

export default Resume
