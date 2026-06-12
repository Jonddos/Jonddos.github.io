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

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#030712' }}>
      <div className="relative">
        <Navbar />
        <main>
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
    </div>
  )
}
