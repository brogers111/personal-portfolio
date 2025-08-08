import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import headshot from "../assets/Headshot.jpeg";

function Home() {

  return (
    <>
      <section className="flex">
        <div className="">
          <h1 className="mt-28 ml-60 font-bluffolk text-8xl text-gray-300">HEY, I'M<br/><span className="ml-10 text-gray-600">BRANDON.</span></h1>
          <h2 className="mt-20 ml-24 font-dongle text-4xl text-gray-800">My Expertise:</h2>
          <ul className="list-disc ml-32">
            <li className="flex items-center">
              <svg className="w-2 h-2 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="5" />
              </svg>
              <span className="font-dongle text-3xl text-gray-700">Full-Stack Software Engineering</span>
            </li>
            <li className="flex items-center">
              <svg className="w-2 h-2 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="5" />
              </svg>
              <span className="font-dongle text-3xl text-gray-600">Search Engine Optimization</span>
            </li>
            <li className="flex items-center">
              <svg className="w-2 h-2 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="5" />
              </svg>
              <span className="font-dongle text-3xl text-gray-500">Entrepreneurship</span>
            </li>
            <li className="flex items-center">
              <svg className="w-2 h-2 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="5" />
              </svg>
              <span className="font-dongle text-3xl text-gray-400">Digital Marketing</span>
            </li>
            <li className="flex items-center">
              <svg className="w-2 h-2 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="5" />
              </svg>
              <span className="font-dongle text-3xl text-gray-300">Graphic Design</span>
            </li>
            <li className="flex items-center">
              <svg className="w-2 h-2 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="5" />
              </svg>
              <span className="font-dongle text-3xl text-gray-300">UI/UX Design</span>
            </li>
          </ul>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/brandonerogers/"
            target="_blank"
            rel='noopener noreferrer'
            className="absolute right-10 top-5 font-dongle text-2xl text-gray-400 cursor-pointer-custom inline-flex items-baseline gap-1"
          >
            LinkedIn
            <FontAwesomeIcon className='size-[0.6rem]' icon={faArrowUpRightFromSquare} />
          </a>
          <img src={headshot} alt="Brandon Rogers headshot" className="mt-56 ml-20 w-[400px] h-[400px] rounded-3xl" />
          <p className="mt-4 ml-16 font-dongle text-xl text-gray-400">Full-stack software engineer and SEO Specialist with <span className="text-gray-600">4+ years</span> of experience.</p>
        </div>
      </section>
    </>
  )
}

export default Home
