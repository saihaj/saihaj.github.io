import { styled } from '../../theme'

const Title = styled( 'div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '1rem',
  marginBottom: '0.3rem',
  '& h4, h5': {
    margin: 0,
    fontWeight: 800,
  },
  '& h5': {
    fontWeight: 'normal',
  },
  '@tablet': {
    alignItems: 'baseline',
    flexDirection: 'column',
  },
} )

const Description = styled( 'h5', {
  margin: 0,
  marginTop: '0.3rem',
  fontWeight: 'normal',
} )

const Location = styled( 'h6', {
  margin: 0,
  fontWeight: 'normal',
} )

const Stack = styled( 'p', {
  margin: 0,
  fontSize: '1rem',
  marginTop: '0.6rem',
} )

type ExperienceProps = {
  company: string,
  role: string,
  startDate:string,
  endDate:string,
  description: string,
  location: string,
  stack: string
}

const Experience = (
  { company, role, startDate, endDate, description, location, stack }:ExperienceProps,
) => (
  <>
    <Title>
      <h4>{company} | {role}</h4>
      {endDate.length === 0 ? <h5>Since {startDate}</h5> : <h5>{startDate} - {endDate}</h5>}
    </Title>
    <Location>{location}</Location>
    <Description>{description}</Description>
    <Stack>{stack.split( ',' ).sort( ( a, b ) => a.localeCompare( b ) ).reduce( ( acc, item ) => `${acc}, ${item}` )}</Stack>
  </>
)

export default Experience
