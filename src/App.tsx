import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import WhatsApp from "@/components/WhatsApp"
import Footer from "@/components/Footer"
import Values from "@/sections/Values"
import About from "@/sections/About"
import Differentials from "@/sections/Differentials"
import Contact from "@/sections/Contact"

export default function App() {
  return (
    <div>
      <Navbar c2={"#0d0e0d"} display="HALFPIPE" />
      <Hero c1={"#FF4400"} c2={"#0d0e0d"} display="HALFPIPE" segment="Esportes Radicais" motto="Viva o radical" />
      <Stats c2={"#0d0e0d"} />
      <Values c2={"#0d0e0d"} />
      <About c2={"#0d0e0d"} display="HALFPIPE" />
      <Differentials c2={"#0d0e0d"} />
      <Contact c2={"#0d0e0d"} />
      <Footer />
      <WhatsApp />
    </div>
  )
}
