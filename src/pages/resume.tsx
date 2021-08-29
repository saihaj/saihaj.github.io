import Layout from '../components/Layout'
import { styled, css } from '../theme'
import Program from '../components/resume/Program'
import Experience from '../components/resume/Experience'
import Certification from '../components/resume/Certifications'
import Skills from '../components/resume/Skills'
import EDUCATION from '../content/Education'
import EXPERIENCE from '../content/Experience'
import CERTIFICATIONS from '../content/Certifications'

const SectionTitle = styled( 'h2', {
  margin: 0,
  marginTop: '2rem',
} )

const firstTitle = css( {
  marginTop: '0 !important',
} )

const Resume = () => (
  <Layout title="Resume">
    <SectionTitle className={firstTitle()}>Education</SectionTitle>
    {EDUCATION.map( props => <Program key={props.title} {...props} /> )}
    <SectionTitle>Experience</SectionTitle>
    {EXPERIENCE.map( props => <Experience key={props.company} {...props} /> )}
    <SectionTitle>Skills</SectionTitle>
    <Skills />
    <SectionTitle>Certifications</SectionTitle>
    {CERTIFICATIONS.map( props => <Certification key={props.company} {...props} /> )}
  </Layout>
)

export default Resume
