import { Link } from "react-router-dom"

function Nav() {

  return (
    <nav className="w-40 flex flex-col items-center justify-center gap-y-4">
      <Link to="/" className="">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Nav
