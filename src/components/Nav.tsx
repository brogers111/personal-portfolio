import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFile, faHammer, faAddressCard } from '@fortawesome/free-solid-svg-icons'

function Nav() {

  return (
    <nav className="fixed top-0 left-0 h-screen w-24 flex flex-col items-center justify-start gap-y-8 pt-8 z-10">
      <Link to="/"
      className="text-gray-300 text-2xl hover:text-gray-400 transition-colors"
      title="Home"
      >
        <FontAwesomeIcon icon={faHouse} />
      </Link>
      <Link to="/resume"
      className="text-gray-300 text-2xl hover:text-gray-400 transition-colors"
      title="Resume"
      >
        <FontAwesomeIcon icon={faFile} />
      </Link>
      <Link to="/technical-projects"
      className="text-gray-300 text-2xl hover:text-gray-400 transition-colors"
      title="Technical Projects"
      >
        <FontAwesomeIcon icon={faHammer} />
      </Link>
      <Link to="/contact"
      className="text-gray-300 text-2xl hover:text-gray-400 transition-colors"
      title="Contact"
      >
        <FontAwesomeIcon icon={faAddressCard} />
      </Link>

      <div style={{ height: '40vh' }} className="w-0.5 bg-gray-200 my-4"></div>

      <div className="-rotate-90 text-gray-300 text-sm font-light">
        2025
      </div>
    </nav>
  )
}

export default Nav
