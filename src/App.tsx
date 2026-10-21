import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Process from './components/Process'
import Technologies from './components/Technologies'
import About from './components/About'
import UtiqAi from './components/UtiqAi'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { SkipLink } from './components/ui/SkipLink'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <SkipLink />
        <div className="relative isolate min-h-dvh overflow-x-clip">
          <Navbar />
          <main id="contenido" tabIndex={-1}>
            <Hero />
            <About />
            <Technologies />
            <Projects />
            <Services />
            <Process />
            <UtiqAi />
            <Contact />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}
