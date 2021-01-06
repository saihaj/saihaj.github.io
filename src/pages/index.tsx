import Seo from '../components/Seo'
import Hero from '../components/Hero'
import About from '../components/About'
import Container from '../components/Container'

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Hero />
    <Container>
      <About className="pb-56" />
    </Container>
  </>
)

export default IndexPage
