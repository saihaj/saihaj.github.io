import Seo from '../components/Seo'
import Hero from '../components/Hero'
import About from '../components/About'
import Container from '../components/Container'
import Footer from '../components/Footer'

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Hero />
    <Container>
      <About className="pb-56" />
    </Container>
    <Footer />
  </>
)

export default IndexPage
