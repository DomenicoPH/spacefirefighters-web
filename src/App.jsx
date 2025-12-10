import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Landing from "./views/Landing/Landing"
import Game from "./views/Game/Game"
import Players from "./views/Players/Players"
import Develop from "./views/Develop/Develop"
import About from "./views/About/About"
import ScrollToTop from './utils/ScrollToTop'

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/juego" element={<Game />} />
          <Route path="/personajes" element={<Players />} />
          <Route path="/desarrollo" element={<Develop />} />
          <Route path="/equipo" element={<About />} />
        </Routes>  
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App
