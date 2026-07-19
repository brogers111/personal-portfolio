import { Routes, Route, Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Training from './components/Training'
import NotFound from './components/NotFound'

function PortfolioLayout() {
  return (
    <div className='flex md:pl-20 md:cursor-custom'>
      <Nav />
      <main className='flex-grow'>
        <Outlet />
      </main>
    </div>
  )
}

function App() {

  return (
    <Routes>
      <Route path='/training' element={<Training />}/>
      <Route element={<PortfolioLayout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/technical-projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
  )
}

export default App
