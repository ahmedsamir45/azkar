import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Azkar from './pages/Azkar'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import './styles/main.scss'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/azkar/:category" element={<Azkar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
