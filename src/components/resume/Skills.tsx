import SKILLS from '../../content/Skills'
import { styled } from '../../theme'

const UL = styled( 'h5', {
  margin: 0,
} )

const Title = styled( 'h4', {
  margin: 0,
  marginTop: '1rem',
  marginBottom: '0.3rem',
} )

const Skills = () => (
  <>
    {Object.keys( SKILLS ).map( skill => (
      <div key={skill}>
        <Title>{skill}</Title>
        <UL>
          {( SKILLS[ skill as keyof typeof SKILLS ] ).sort( ( a, b ) => a.localeCompare( b ) ).reduce( ( acc, item ) => `${acc}, ${item}` )}
        </UL>
      </div>
    ) )}
  </>
)

export default Skills
