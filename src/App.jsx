import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Project from './pages/Project.jsx'
import GitHub from './pages/GitHub.jsx'

import Menu from './components/Menu.jsx'
import Aside from './components/Aside.jsx'
import Explorer from './components/Explorer.jsx'
import Tabs from './components/Tabs.jsx'
import Footer from './components/Footer.jsx'

import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='container'>
      <Menu />

      <Router>
        <section className='core'>
          <Aside />
          <Explorer />

          <div className="coding">
            <Tabs />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project" element={<Project />} />
                <Route path="/github" element={<GitHub />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
          </div>
        </section>
      </Router>

      <Footer />
    </div>
  )
}

export default App
