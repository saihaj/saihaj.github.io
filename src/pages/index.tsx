import Seo from '../components/Seo'
import { AboutSection, MainSection } from '../components/sections'
import Container from '../components/Container'
import Footer from '../components/Footer'

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <MainSection />
    <Container>
      <AboutSection className="pb-56" />
    </Container>
    <Footer />
  </>
)

export default IndexPage
