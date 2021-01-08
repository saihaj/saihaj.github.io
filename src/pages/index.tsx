import Seo from '../components/Seo'
import { AboutSection, MainSection, ProjectSection } from '../components/sections'
import Container from '../components/Container'
import Footer from '../components/Footer'

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <MainSection />
    <Container>
      <AboutSection className="pb-16" />
      <ProjectSection className="pb-40" />
    </Container>
    <Footer />
  </>
)

export default IndexPage
