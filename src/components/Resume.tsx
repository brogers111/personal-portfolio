import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

// Logos
import amsiveLogo from '../assets/logos/amsive-logo.png'
import sbsLogo from '../assets/logos/sbs-logo.jpg'
import ofcaLogo from '../assets/logos/ofca-logo.png'
import inscriptionLogo from '../assets/logos/inscription-logo.png'
import gsLogo from '../assets/logos/gs-logo.jpeg'
import muLogo from '../assets/logos/mu-logo.png'
import msuLogo from '../assets/logos/msu-logo.jpg'
import tripletenLogo from '../assets/logos/tripleten-logo.jpg'
import asijLogo from '../assets/logos/asij-logo.png'
import turbotenantLogo from '../assets/logos/turbotenant-logo.png'

// Components
const SectionHeading = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <>
    <p className="font-dongle text-3xl text-gray-300">{subtitle}</p>
    <h1 className="font-bluffolk text-6xl md:text-8xl whitespace-nowrap text-gray-600 pb-4 md:pb-0">{title}</h1>
  </>
);

const ResumeItem = ({ logo, logoAlt, location, title, duration, dates, bullets }: { logo: string; logoAlt: string; location: string; title: string; duration: string; dates: string; bullets: string[] }) => (
  <div className='md:flex justify-between pt-10'>
    <div>
      <img src={logo} alt={logoAlt} className='h-10 md:h-6' />
      <p className='pt-2 font-dongle text-xl text-gray-400'>{location}</p>
      <p className='font-dongle text-4xl text-gray-700'>
        {title}
        {duration && <span className='pl-2 text-2xl text-gray-400'>({duration})</span>}
      </p>
      <p className='font-dongle text-2xl text-gray-400'>{dates}</p>
    </div>
    <div className='flex flex-col gap-2'>
      {bullets.map((bullet, i) => (
        <p
          key={i}
          className={`font-dongle px-2 py-2 md:py-0 md:px-0 text-2xl text-gray-400 leading-none max-w-[600px] ${i !== bullets.length - 1 ? 'border-b border-gray-200' : ''}`}
        >
          {bullet}
        </p>
      ))}
    </div>
  </div>
);

const Divider = () => <div className="border-b-2 border-gray-200 pt-10"></div>;

// Data arrays
const experience = [
  {
    logo: turbotenantLogo,
    logoAlt: "TurboTenant logo",
    location: "Denver, Colorado, United States (Hybrid)",
    title: "Senior SEO Manager - TurboTenant",
    duration: "4 mos",
    dates: "March, 2026 - Present",
    bullets: [
      "Manages technical SEO across TurboTenant digital properties, including core web vitals, crawl optimization, structured data, and site architecture to maintain strong site health and search visibility.",
      "Supports growth in organic traffic and signups by implementing SEO initiatives such as content optimization, SERP feature targeting (e.g., PAA, AI Overviews, video), and backlink coordination with internal teams and external partners.",
      "Builds and maintains internal tools using software engineering skills to support SEO efforts at scale, including solutions for content creation and monitoring, core web vitals analysis, log file analysis, and tracking industry updates and search engine documentation."
    ]
  },
  {
    logo: amsiveLogo,
    logoAlt: "Amsive logo",
    location: "New York, NY, USA (Remote)",
    title: "SEO Specialist",
    duration: "4 yrs 2 mos",
    dates: "February, 2022 - Present",
    bullets: [
      "Developed and executed 30+ effective search and local SEO campaigns, increasing organic traffic by 70% and conversions by 107% for clients in finance, senior living, healthcare, and self-storage industries within 12 months.",
      "Utilized advanced SEO tools (Ahrefs, SEMrush, Screaming Frog, GSC, GTM, GA4, Ryte, BrightLocal, STAT) to conduct keyword research, track valued KPI’s, and deliver monthly reports to clients.",
      "Collaborated with cross-functional teams to implement on-page and technical SEO strategies, improving website rankings, conversion rates, and user experience."
    ]
  },
  {
    logo: ofcaLogo,
    logoAlt: "Oregon Fire Chiefs Association logo",
    location: "Denver, CO, USA (Remote)",
    title: "Software Engineer (Internship)",
    duration: "4 mos",
    dates: "May, 2025 - August, 2025",
    bullets: [
      "Built responsive React components styled with Tailwind CSS and Ant Design, following a Figma design file to ensure UI consistency and accessibility across user roles and authenticated vs. non-authenticated screens.",
      "Integrated GraphQL and Apollo Client to manage frontend data queries and mutations, while using Keystone to structure and interact with the backend database.",
      "Collaborated with OFCA developers and stakeholders via Jira, Discord, Zoom, and GitHub with a team of 12+ developers, using agile sprints to deliver scalable, maintainable features that improved workflow efficiency and user experience."
    ]
  },
  {
    logo: inscriptionLogo,
    logoAlt: "Inscription logo",
    location: "Lakewood, CO, USA (Remote)",
    title: "Frontend Developer",
    duration: "1 yr 6 mos",
    dates: "February, 2024 - July, 2025",
    bullets: [
      "Led a team of 3 engineers to develop a desktop and mobile application, built in VueJS, designed to allow entrepreneurs to seamlessly document their business journey and receive data and insights based on their entries.",
      "Data summarization and analysis using OpenAI API (GPT-4o), Perplexity AI API, GraphQL, and Deepgram (speech-to-text). Data collection using Twilio and ElevenLabs.",
      "User authentication and data storage with AWS and Neon."
    ]
  },
  {
    logo: sbsLogo,
    logoAlt: "Strategic Branding Studios logo",
    location: "Gaithersburg, MD, USA (Remote)",
    title: "UI/UX Designer & Marketing Associate",
    duration: "11 mos",
    dates: "April, 2021 - February, 2022",
    bullets: [
      "Conducted in-depth competitive analysis for 5+ clients in private equity, cybersecurity, and change management industries, informing brand strategy and multi-million dollar marketing budgets.",
      "Interfaced with 15+ business executives to understand target audiences, goals, and deliverables, ensuring impactful marketing outcomes.",
      "Designed and produced 20+ content pieces per week (infographics, social media graphics, presentations) adhering to brand guidelines and tone of voice across multiple clients."
    ]
  },
  {
    logo: gsLogo,
    logoAlt: "Global Squad logo",
    location: "Frederick, MD, USA",
    title: "Director of International Operations",
    duration: "2 yrs 7 mos",
    dates: "October, 2018 - April, 2021",
    bullets: [
      "Generated international business opportunities contacting coaches, trainers, and athletic directors to organize youth camps and clinics.",
      "Recruited top level international talent to attend Summer Academy for increased collegiate exposure and further development.",
      "Expanded business offerings and features including an online training application, international tours, website redesign and maintenance, social media content creation, and apparel design."
    ]
  },
];

const education = [
  {
    logo: msuLogo,
    logoAlt: "Metropolitan State University logo",
    location: "Metropolitan State University of Denver - Denver, CO, USA",
    title: "Bachelor of Science - Mechanical Engineering",
    duration: "",
    dates: "August, 2024 - May, 2028",
    bullets: [
      "Coursework includes technical programming, materials science, robotics/mechatronics, computer aided design (AutoCAD, OnShape, Solidworks), calculus, physics, quality assurance, and geometric dimensioning & tolerancing.",
      "Current GPA: 4.00"
    ]
  },
  {
    logo: tripletenLogo,
    logoAlt: "TripleTen logo",
    location: "TripleTen - Arvada, CO, USA (Remote)",
    title: "Full-Stack Software Engineering Bootcamp",
    duration: "",
    dates: "May, 2024 - December, 2024",
    bullets: [
      "Coursework included building two frontend and two full-stack web applications using languages, tools, and frameworks such as HTML5, CSS3, JavaScript, React, Node.js, Express.js, MongoDB, Webpack, Postman, Figma, and Git/GitHub.",
      "10-month full-stack software engineering bootcamp built around 16 two-week sprints."
    ]
  },
  {
    logo: muLogo,
    logoAlt: "Marymount University logo",
    location: "Marymount University - Arlington, VA, USA",
    title: "Bachelor of Arts - Business Administration",
    duration: "",
    dates: "August, 2015 - May, 2019",
    bullets: [
      "Coursework included topics such as entrepreneurship, accounting principles, business law, business ethics, a 6-month internship, and a cumulative final business plan pitch event in front of 8+ investors.",
      "Marketing concentration and international studies minor. 8-Time Dean's List Recipient. Graduated with Honors, Summa Cum Laude, and 3.96 GPA."
    ]
  },
  {
    logo: asijLogo,
    logoAlt: "The American School in Japan logo",
    location: "The American School in Japan - Tokyo, Japan",
    title: "Elementary, Middle, & High School",
    duration: "",
    dates: "August, 2002 - May, 2015",
    bullets: [
      "Coursework included college-level classes such as AP Physics, AP Chemistry, AP Economics, AP Calculus AB, and AP World History.",
      "Captain of varsity basketball, football, and baseball. Two-time Abot Kamay service trip participant. Graduated with 4.12 GPA."
    ]
  },
];

export default function Resume() {
  return (
    <>
      {/* Desktop Resume */}
      <div className='hidden md:block px-20 py-20'>
        <div className="flex justify-between">
          <div>
            <SectionHeading subtitle="REVIEW MY CAREER" title="EXPERIENCE" />
          </div>
          <div className='pl-28'>
            <p className="font-dongle text-2xl leading-none text-gray-400">
              Full-stack developer and SEO Specialist with 6 years of experience, a bachelor’s degree in marketing, a successful bootstrapped business exit, and currently pursuing a second degree in mechanical engineering.
            </p>
            <a href="https://www.linkedin.com/in/brandonerogers/" target="_blank" rel='noopener noreferrer' className="pt-6 font-dongle text-2xl text-gray-400 cursor-pointer-custom inline-flex items-baseline gap-1">
              LinkedIn <FontAwesomeIcon className='size-[0.6rem]' icon={faArrowUpRightFromSquare} />
            </a>
            <a href="https://github.com/brogers111" target="_blank" rel='noopener noreferrer' className="pt-6 pl-4 font-dongle text-2xl text-gray-400 cursor-pointer-custom inline-flex items-baseline gap-1">
              GitHub <FontAwesomeIcon className='size-[0.6rem]' icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>

        {experience.map((job, i) => (
          <div key={i}>
            <ResumeItem {...job} />
            {i !== experience.length - 1 && <Divider />}
          </div>
        ))}

        <div className="pt-20">
          <SectionHeading subtitle="REVIEW MY" title="EDUCATION" />
        </div>

        {education.map((school, i) => (
          <div key={i}>
            <ResumeItem {...school} />
            {i !== education.length - 1 && <Divider />}
          </div>
        ))}
      </div>

      {/* Mobile Resume */}
      <div className='md:hidden px-4 py-4'>
        <SectionHeading subtitle="REVIEW MY" title="CAREER" />
        <div className='text-right'>
          <a href="https://www.linkedin.com/in/brandonerogers/" target="_blank" rel='noopener noreferrer' className="font-dongle text-2xl text-gray-600 cursor-pointer-custom inline-flex items-baseline gap-1">
            LinkedIn <FontAwesomeIcon className='size-[0.6rem]' icon={faArrowUpRightFromSquare} />
          </a>
          <a href="https://github.com/brogers111" target="_blank" rel='noopener noreferrer' className="pl-4 font-dongle text-2xl text-gray-600 cursor-pointer-custom inline-flex items-baseline gap-1">
            GitHub <FontAwesomeIcon className='size-[0.6rem]' icon={faArrowUpRightFromSquare} />
          </a>
          <p className="font-dongle text-left text-2xl leading-none text-gray-400 pt-4">
            Full-stack developer and SEO Specialist with 6 years of experience, a bachelor’s degree in marketing, a successful bootstrapped business exit, and currently pursuing a second degree in mechanical engineering.
          </p>
        </div>

        {experience.map((job, i) => (
          <div key={i}>
            <ResumeItem {...job} />
            {i !== experience.length - 1 && <Divider />}
          </div>
        ))}

        <div className="pt-20">
          <SectionHeading subtitle="REVIEW MY" title="EDUCATION" />
        </div>

        {education.map((school, i) => (
          <div key={i}>
            <ResumeItem {...school} />
            {i !== education.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </>
  );
}
