import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import headshot from "../assets/headshot.jpeg";
import BulletItem from './BulletItem';

function Home() {

  return (
    <>
      <section className="flex">
        <div className="">
          <h1 className="mt-28 ml-60 font-bluffolk text-8xl text-gray-300">HEY, I'M<br/><span className="ml-10 text-gray-600">BRANDON.</span></h1>
          <h2 className="mt-20 ml-24 font-dongle text-4xl text-gray-800">My Expertise:</h2>
          <ul className="list-disc ml-32">
            <BulletItem>Full-Stack Software Engineering</BulletItem>
            <BulletItem>Search Engine Optimization</BulletItem>
            <BulletItem>Entrepreneurship</BulletItem>
            <BulletItem>Digital Marketing</BulletItem>
            <BulletItem>Graphic Design</BulletItem>
            <BulletItem>UI/UX Design</BulletItem>
          </ul>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/brandonerogers/"
            target="_blank"
            rel='noopener noreferrer'
            aria-label="Visit my LinkedIn profile"
            className="absolute right-32 top-5 font-dongle text-2xl text-gray-400 cursor-pointer-custom inline-flex items-baseline gap-1"
          >
            LinkedIn
            <FontAwesomeIcon className='size-[0.6rem]' icon={faArrowUpRightFromSquare} />
          </a>
          <a
              href="https://github.com/brogers111"
              target="_blank"
              rel='noopener noreferrer'
              aria-label="Visit my LinkedIn profile"
              className="absolute right-10 top-5 font-dongle text-2xl text-gray-400 cursor-pointer-custom inline-flex items-baseline gap-1"
            >
              GitHub
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
