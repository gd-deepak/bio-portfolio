import AnimatedBg from './components/AnimatedBg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <AnimatedBg />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
