import Navbar from "./components/navbar"
import AboutUs from "./sections/aboutus"
import Benefits from "./sections/benefits"
import Contact from "./sections/contact"
import Home from "./sections/home"
import Services from "./sections/ourservices"
import "./styles/global.css"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Benefits />
      <Services />
      <Contact />
    </>
  )
}

export default App