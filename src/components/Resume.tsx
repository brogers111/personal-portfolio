import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import amsiveLogo from '../assets/amsive-logo.png'
import sbsLogo from '../assets/sbs-logo.jpg'
import ofcaLogo from '../assets/ofca-logo.png'
import inscriptionLogo from '../assets/inscription-logo.png'
import gsLogo from '../assets/gs-logo.jpeg'
import muLogo from '../assets/mu-logo.png'
import msuLogo from '../assets/msu-logo.jpg'
import tripletenLogo from '../assets/tripleten-logo.jpg'
import asijLogo from '../assets/asij-logo.png'

function Resume() {

  return (
    <>
      <div className='px-20 py-20'>
        <div className="flex justify-between">
          <div>
            <p className="font-dongle text-3xl text-gray-300">REVIEW MY CAREER</p>
            <h1 className="font-bluffolk text-8xl whitespace-nowrap text-gray-600">EXPERIENCE</h1>
          </div>
          <div className='pl-28'>
            <p className="font-dongle text-2xl leading-none text-gray-400">Full-stack developer and SEO Specialist with 5 years of experience, a bachelor’s degree in marketing, a successful bootstrapped business exit, and currently pursuing a second degree in mechanical engineering.</p>
            <a
              href="https://www.linkedin.com/in/brandonerogers/"
              target="_blank"
              rel='noopener noreferrer'
              aria-label="Visit my LinkedIn profile"
              className="pt-6 font-dongle text-2xl text-gray-400 cursor-pointer-custom inline-flex items-baseline gap-1"
            >
              LinkedIn
              <FontAwesomeIcon className='size-[0.6rem]' icon={faArrowUpRightFromSquare} />
            </a>
            <a
              href="https://github.com/brogers111"
              target="_blank"
              rel='noopener noreferrer'
              aria-label="Visit my LinkedIn profile"
              className="pt-6 pl-4 font-dongle text-2xl text-gray-400 cursor-pointer-custom inline-flex items-baseline gap-1"
            >
              GitHub
              <FontAwesomeIcon className='size-[0.6rem]' icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
        <div className='flex justify-between pt-20'>
          <div>
            <img src={amsiveLogo} alt="Amsive logo" className='h-6' />
            <p className='pt-2 font-dongle text-xl text-gray-400'>New York, NY, USA (Remote)</p>
            <p className='font-dongle text-4xl text-gray-700'>SEO Specialist<span className='pl-2 text-2xl text-gray-400'>(2 yrs 8 mos)</span></p>
            <p className='font-dongle text-2xl text-gray-400'>January, 2023 - Present</p>
            <p className='pt-4 font-dongle text-4xl text-gray-700'>SEO Analyst<span className='pl-2 text-2xl text-gray-400'>(1 yr)</span></p>
            <p className='font-dongle text-2xl text-gray-400'>February, 2022 - January, 2023</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Developed and executed 30+ effective search and local SEO campaigns, increasing organic traffic by 70% and conversions by 107% for clients in finance, senior living, healthcare, and self-storage industries within 12 months.
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Utilized advanced SEO tools (Ahrefs, SEMrush, Screaming Frog, Google Search Console, Google Tag Manager, Google Analytics 4) to conduct keyword research, track valued KPI’s, and deliver monthly reports to clients.
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px]'>
              Collaborated with cross-functional teams to implement on-page and technical SEO strategies, improving website rankings, conversion rates, and user experience.
            </p>
          </div>
        </div>
        <div className="border-b-2 border-gray-200 pt-10"></div>
        <div className='flex justify-between pt-10'>
          <div>
            <img src={ofcaLogo} alt="Oregon Fire Chiefs Association logo" className='h-10' />
            <p className='pt-2 font-dongle text-xl text-gray-400'>Denver, CO, USA (Remote)</p>
            <p className='font-dongle text-4xl text-gray-700'>Software Engineer (Internship)<span className='pl-2 text-2xl text-gray-400'>(4 mos)</span></p>
            <p className='font-dongle text-2xl text-gray-400'>May, 2025 - August, 2025</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Built responsive React components styled with Tailwind CSS and Ant Design, following a Figma design file to ensure UI consistency and accessibility across user roles and authenticated vs. non-authenticated screens.
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Integrated GraphQL and Apollo Client to manage frontend data queries and mutations, while using Keystone to structure and interact with the backend database.
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px]'>
              Collaborated with OFCA developers and stakeholders via Jira, Discord, Zoom, and GitHub with a team of 12+ developers, using agile sprints to deliver scalable, maintainable features that improved workflow efficiency and user experience.
            </p>
          </div>
        </div>
        <div className="border-b-2 border-gray-200 pt-10"></div>
        <div className='flex justify-between pt-10'>
          <div>
            <img src={inscriptionLogo} alt="Inscription logo" className='h-10' />
            <p className='pt-2 font-dongle text-xl text-gray-400'>Lakewood, CO, USA (Remote)</p>
            <p className='font-dongle text-4xl text-gray-700'>Frontend Developer<span className='pl-2 text-2xl text-gray-400'>(1 yr 6 mos)</span></p>
            <p className='font-dongle text-2xl text-gray-400'>February, 2024 - July, 2025</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Led a team of 3 engineers to develop a desktop and mobile application, built in VueJS, designed to allow entrepreneurs to seamlessly document their business journey and receive data and insights based on their entries.
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Data summarization and analysis using OpenAI API (GPT-4o), Perplexity AI API, GraphQL, and Deepgram (speech-to-text). Data collection using Twilio and ElevenLabs.
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px]'>
              User authentication and data storage with AWS and Neon.
            </p>
          </div>
        </div>
        <div className="border-b-2 border-gray-200 pt-10"></div>
        <div className='flex justify-between pt-10'>
          <div>
            <img src={sbsLogo} alt="Strategic Branding Studios logo" className='h-6' />
            <p className='pt-2 font-dongle text-xl text-gray-400'>Gaithersburg, MD, USA (Remote)</p>
            <p className='font-dongle text-4xl text-gray-700'>UI/UX Designer & Marketing Associate<span className='pl-2 text-2xl text-gray-400'>(11 mos)</span></p>
            <p className='font-dongle text-2xl text-gray-400'>April, 2021 - February, 2022</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Conducted in-depth competitive analysis for 5+ clients in private equity, cybersecurity, and change management industries, informing brand strategy and multi-million dollar marketing budgets.
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Interfaced with 15+ business executives to understand target audiences, goals, and deliverables, ensuring impactful marketing outcomes.
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px]'>
              Designed and produced 20+ content pieces per week (infographics, social media graphics, presentations) adhering to brand guidelines and tone of voice across multiple clients.
            </p>
          </div>
        </div>
        <div className="border-b-2 border-gray-200 pt-10"></div>
        <div className='flex justify-between pt-10'>
          <div>
            <img src={gsLogo} alt="Global Squad logo" className='h-10' />
            <p className='pt-2 font-dongle text-xl text-gray-400'>Frederick, MD, USA</p>
            <p className='font-dongle text-4xl text-gray-700'>Director of International Operations<span className='pl-2 text-2xl text-gray-400'>(2 yrs 7 mos)</span></p>
            <p className='font-dongle text-2xl text-gray-400'>October, 20218 - April, 2021</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Generated international business opportunities contacting coaches, trainers, and athletic directors to organize youth camps and clinics.
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Recruited top level international talent to attend Summer Academy for increased collegiate exposure and further development.
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px]'>
              Expanded business offerings and features including an online training application, international tours, website redesign and maintenance, social media content creation, and apparel design.
            </p>
          </div>
        </div>
        <p className="pt-20 font-dongle text-3xl text-gray-300">REVIEW MY</p>
        <h1 className="font-bluffolk text-8xl whitespace-nowrap text-gray-600">EDUCATION</h1>
        <div className='flex justify-between pt-10'>
          <div>
            <img src={msuLogo} alt="Metropolitan State University logo" className='h-6' />
            <p className='pt-2 font-dongle text-xl text-gray-400'>Metropolitan State University of Denver - Denver, CO, USA</p>
            <p className='font-dongle text-4xl text-gray-700'>Bachelor of Science - Mechanical Engineering</p>
            <p className='font-dongle text-2xl text-gray-400'>August, 2024 - May, 2028</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Coursework includes technical programming, materials science, robotics/mechatronics, computer aided design (AutoCAD, OnShape, Solidworks), and workpiece production, refinement, and assembly with mills and lathes.
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px]'>
              Current GPA: 4.00
            </p>
          </div>
        </div>
        <div className="border-b-2 border-gray-200 pt-10"></div>
        <div className='flex justify-between pt-10'>
          <div>
            <img src={tripletenLogo} alt="TripleTen logo" className='h-6' />
            <p className='pt-2 font-dongle text-xl text-gray-400'>TripleTen Software Engineering Bootcamp - Arvada, CO, USA (Remote)</p>
            <p className='font-dongle text-4xl text-gray-700'>Bachelor of Science - Mechanical Engineering</p>
            <p className='font-dongle text-2xl text-gray-400'>May, 2024 - December, 2024</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Coursework included building two frontend and two full-stack web applications using languages, tools, and frameworks such as HTML5, CSS3, JavaScript, React, Node.js, Express.js, MongoDB, Webpack, Postman, Figma, and Git/GitHub.
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px]'>
              10-month full-stack software engineering bootcamp built around 16 two-week sprints.
            </p>
          </div>
        </div>
        <div className="border-b-2 border-gray-200 pt-10"></div>
        <div className='flex justify-between pt-10'>
          <div>
            <img src={muLogo} alt="Marymount University logo" className='h-6' />
            <p className='pt-2 font-dongle text-xl text-gray-400'>Marymount University - Arlington, VA, USA</p>
            <p className='font-dongle text-4xl text-gray-700'>Bachelor of Arts - Business Administration</p>
            <p className='font-dongle text-2xl text-gray-400'>August, 2015 - May, 2019</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Coursework included topics such as entrepreneurship, accounting principles, business law, business ethics, a 6-month internship, and a cumulative final business plan pitch event in front of 8+ investors.
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Concentration in marketing with a minor in international studies. 8-Time Dean's List Recipient.
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px]'>
              Graduated with Honors, Summa Cum Laude, and 3.96 GPA.
            </p>
          </div>
        </div>
        <div className="border-b-2 border-gray-200 pt-10"></div>
        <div className='flex justify-between pt-10'>
          <div>
            <img src={asijLogo} alt="ASIJ logo" className='h-6' />
            <p className='pt-2 font-dongle text-xl text-gray-400'>The American School in Japan - Tokyo, Japan</p>
            <p className='font-dongle text-4xl text-gray-700'>Elementary, Middle, & High School</p>
            <p className='font-dongle text-2xl text-gray-400'>August, 2002 - May, 2015</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Coursework included college-level classes such as AP Physics, AP Chemistry, AP Economics, AP Calculus AB, and AP World History
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px] border-b border-gray-200'>
              Captain of varsity basketball, football, and baseball. Two-time Abot Kamay service trip participant.
            </p>
            <p className='font-dongle text-2xl text-gray-400 leading-none max-w-[600px]'>
              Graduated with 4.12 GPA.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume
