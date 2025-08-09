import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function Contact() {

  return (
    <>
      <div className='px-20 py-20'>
        <p className="font-dongle text-3xl text-gray-300">HERE'S MY</p>
        <h1 className="font-bluffolk text-8xl whitespace-nowrap text-gray-600">CONTACT</h1>
        <p className="pl-80 font-dongle text-3xl text-gray-300">INFORMATION</p>
      </div>
      <div className='flex flex-col items-center text-center mx-80'>
        <p className='py-4 font-dongle text-4xl text-gray-800'>Email: <span className='text-gray-400'>ber64111@gmail.com</span></p>
        <div className="border-b-2 border-gray-200 w-full"></div>
        <p className='py-4 font-dongle text-4xl text-gray-800'>Phone: <span className='text-gray-400'>(507) 508-6725</span></p>
        <div className="border-b-2 border-gray-200 w-full"></div>
        <a
          href="https://github.com/brogers111"
          target="_blank"
          rel='noopener noreferrer'
          aria-label="Visit my LinkedIn profile"
          className="py-4 font-dongle text-4xl text-gray-400 cursor-pointer-custom inline-flex items-baseline gap-1"
        >
          <span className='text-gray-800'>GitHub: </span>https://github.com/brogers111
          <FontAwesomeIcon className='size-[1rem]' icon={faArrowUpRightFromSquare} />
        </a>
        <div className="border-b-2 border-gray-200 w-full"></div>
        <a
          href="https://www.linkedin.com/in/brandonerogers/"
          target="_blank"
          rel='noopener noreferrer'
          aria-label="Visit my LinkedIn profile"
          className="py-4 font-dongle text-4xl text-gray-400 cursor-pointer-custom inline-flex items-baseline gap-1"
        >
          <span className='text-gray-800'>LinkedIn: </span>
          https://www.linkedin.com/in/brandonerogers/
          <FontAwesomeIcon className='size-[1rem]' icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </>
  )
}

export default Contact
