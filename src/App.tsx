import Navbar from "./components/navbar"
import AboutUs from "./sections/aboutus"
import Benefits from "./sections/benefits"
import Home from "./sections/home"
import "./styles/global.css"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Benefits />
    </>
  )
}

export default App