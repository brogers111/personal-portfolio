import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFile, faHammer, faAddressCard } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:flex fixed top-0 left-0 h-screen w-24 flex-col items-center justify-start gap-y-8 pt-8 z-10">
        <Link
          to="/"
          className="text-gray-300 text-2xl hover:text-gray-400 transition-colors cursor-pointer-custom"
          title="Home"
        >
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <Link
          to="/resume"
          className="text-gray-300 text-2xl hover:text-gray-400 transition-colors cursor-pointer-custom"
          title="Resume"
        >
          <FontAwesomeIcon icon={faFile} />
        </Link>
        <Link
          to="/technical-projects"
          className="text-gray-300 text-2xl hover:text-gray-400 transition-colors cursor-pointer-custom"
          title="Technical Projects"
        >
          <FontAwesomeIcon icon={faHammer} />
        </Link>
        <Link
          to="/contact"
          className="text-gray-300 text-2xl hover:text-gray-400 transition-colors cursor-pointer-custom"
          title="Contact"
        >
          <FontAwesomeIcon icon={faAddressCard} />
        </Link>

        <div style={{ height: '40vh' }} className="w-0.5 bg-gray-200 my-4"></div>

        <div className="-rotate-90 text-gray-300 text-sm font-light">
          2025
        </div>
      </nav>

      {/* Mobile Floating Nav */}
      <nav className="md:hidden fixed bottom-4 right-4 z-50 bg-white backdrop-blur-md rounded-2xl shadow-2xl flex flex-col gap-10 px-2 py-6">
        <Link
          to="/"
          className="text-gray-400 text-4xl"
          title="Home"
        >
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <Link
          to="/resume"
          className="text-gray-400 text-4xl"
          title="Resume"
        >
          <FontAwesomeIcon icon={faFile} />
        </Link>
        <Link
          to="/technical-projects"
          className="text-gray-400 text-4xl"
          title="Technical Projects"
        >
          <FontAwesomeIcon icon={faHammer} />
        </Link>
        <Link
          to="/contact"
          className="text-gray-400 text-4xl"
          title="Contact"
        >
          <FontAwesomeIcon icon={faAddressCard} />
        </Link>
      </nav>
    </>
  )
}

export default Nav
