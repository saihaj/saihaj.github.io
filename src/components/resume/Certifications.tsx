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
} )

const Credential = styled( 'h6', {
  margin: 0,
} )

type CertificationProps = {
  title: string,
  company: string,
  startDate:string,
  endDate:string,
  cred: string,
}

const Certification = ( { title, company, startDate, endDate, cred }:CertificationProps ) => (
  <>
    <Title>
      <h4>{title} | {company}</h4>
      <h5>{startDate} - {endDate}</h5>
    </Title>
    <Credential>Credential ID: {cred}</Credential>
  </>
)

export default Certification
