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
  fontWeight: 'normal',
} )

const Location = styled( 'h6', {
  margin: 0,
  fontWeight: 'normal',
} )

type ProgramProps = {
  title: string,
  startDate:string,
  endDate:string,
  description: string,
  location: string,
}

const Program = ( { title, startDate, endDate, description, location }:ProgramProps ) => (
  <>
    <Title>
      <h4>{title}</h4>
      <h5>{startDate} - {endDate}</h5>
    </Title>
    <Description>{description}</Description>
    <Location>{location}</Location>
  </>
)

export default Program
