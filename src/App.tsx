import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div className='flex md:pl-20 md:cursor-custom'>
      <Nav />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/resume' element={<Resume />}/>
          <Route path='/technical-projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
