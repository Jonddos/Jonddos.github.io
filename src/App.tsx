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
    <div className="relative min-h-screen bg-dark-900 overflow-x-hidden">
      {/* Persistent subtle grid */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-40 z-0" />

      <div className="relative z-10">
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
