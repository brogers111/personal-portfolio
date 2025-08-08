import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div className='flex pl-20 cursor-custom'>
      <Nav />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/resume' element={<About />}/>
          <Route path='/technical-projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
