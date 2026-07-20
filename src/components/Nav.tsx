import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFile, faHammer, faAddressCard, faBasketball } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:flex fixed top-0 left-0 h-screen w-24 flex-col items-center justify-start gap-y-8 pt-8 z-10">
        <a
          href="/"
          className="text-gray-300 text-2xl hover:text-gray-400 transition-colors cursor-pointer-custom"
          title="Home"
        >
          <FontAwesomeIcon icon={faHouse} />
        </a>
        <a
          href="/resume/"
          className="text-gray-300 text-2xl hover:text-gray-400 transition-colors cursor-pointer-custom"
          title="Resume"
        >
          <FontAwesomeIcon icon={faFile} />
        </a>
        <a
          href="/technical-projects/"
          className="text-gray-300 text-2xl hover:text-gray-400 transition-colors cursor-pointer-custom"
          title="Technical Projects"
        >
          <FontAwesomeIcon icon={faHammer} />
        </a>
        <a
          href="/training/"
          className="text-gray-300 text-2xl hover:text-gray-400 transition-colors cursor-pointer-custom"
          title="Training"
        >
          <FontAwesomeIcon icon={faBasketball} />
        </a>
        <a
          href="/contact/"
          className="text-gray-300 text-2xl hover:text-gray-400 transition-colors cursor-pointer-custom"
          title="Contact"
        >
          <FontAwesomeIcon icon={faAddressCard} />
        </a>

        <div style={{ height: '40vh' }} className="w-0.5 bg-gray-200 my-4"></div>

        <div className="-rotate-90 text-gray-300 text-sm font-light">
          2025
        </div>
      </nav>

      {/* Mobile Floating Nav */}
      <nav className="md:hidden fixed bottom-4 right-4 z-50 bg-white/20 backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col gap-4 px-2 py-3">
        <a
          href="/"
          className="text-gray-400 text-2xl"
          title="Home"
        >
          <FontAwesomeIcon icon={faHouse} />
        </a>
        <a
          href="/resume/"
          className="text-gray-400 text-2xl"
          title="Resume"
        >
          <FontAwesomeIcon icon={faFile} />
        </a>
        <a
          href="/technical-projects/"
          className="text-gray-400 text-2xl"
          title="Technical Projects"
        >
          <FontAwesomeIcon icon={faHammer} />
        </a>
        <a
          href="/training/"
          className="text-gray-400 text-2xl"
          title="Training"
        >
          <FontAwesomeIcon icon={faBasketball} />
        </a>
        <a
          href="/contact/"
          className="text-gray-400 text-2xl"
          title="Contact"
        >
          <FontAwesomeIcon icon={faAddressCard} />
        </a>
      </nav>
    </>
  )
}

export default Nav
