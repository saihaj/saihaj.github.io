import Seo from '../components/Seo'
import { AboutSection, MainSection, ProjectSection } from '../components/sections'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Line from '../components/Line'

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <MainSection />
    <Line />
    <Container className="pt-16">
      <AboutSection className="pb-16" />
    </Container>
    <Line />
    <Container className="pt-16">
      <ProjectSection className="pb-40" />
    </Container>
    <Footer />
  </>
)

export default IndexPage
