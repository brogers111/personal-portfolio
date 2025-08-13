import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

// Project Photos
import ofcaOne from '../assets/project-photos/ofca-1.png'
import ofcaTwo from '../assets/project-photos/ofca-2.png'
import ofcaThree from '../assets/project-photos/ofca-3.png'
import anchorOne from '../assets/project-photos/anchor-1.png'
import anchorTwo from '../assets/project-photos/anchor-2.png'
import anchorThree from '../assets/project-photos/anchor-3.png'
import inscriptionOne from '../assets/project-photos/inscription-1.png'
import inscriptionTwo from '../assets/project-photos/inscription-2.png'
import inscriptionThree from '../assets/project-photos/inscription-3.png'
import newsOne from '../assets/project-photos/news-1.png'
import newsTwo from '../assets/project-photos/news-2.png'
import newsThree from '../assets/project-photos/news-3.png'
import spotsOne from '../assets/project-photos/spots-1.png'
import spotsTwo from '../assets/project-photos/spots-2.png'
import spotsThree from '../assets/project-photos/spots-3.png'

function SkillPill({ name }: { name: string }) {
  return (
    <p className="font-dongle text-gray-400 text-2xl bg-gray-100 rounded-3xl inline px-4 hover:bg-gray-200">
      {name}
    </p>
  )
}

interface ProjectLink {
  label: string
  url: string
}

interface ProjectCardProps {
  title: string
  links: ProjectLink[]
  images: { src: string; alt: string; style: React.CSSProperties; zIndex: number }[]
  skills: string[]
  descriptionPoints: string[]
}

function ProjectCard({
  title,
  links,
  images,
  skills,
  descriptionPoints,
}: ProjectCardProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="mt-4 p-4 border-2 border-gray-100 rounded-2xl">
      <p className="pb-2 font-dongle text-4xl text-gray-600 leading-none">{title}</p>

      <div className="flex justify-center mb-4 flex-wrap">
        {links.map(({ label, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-dongle text-2xl text-gray-400 cursor-pointer-custom inline-flex items-baseline gap-1 px-4"
          >
            {label} <FontAwesomeIcon className="size-[0.6rem]" icon={faArrowUpRightFromSquare} />
          </a>
        ))}
      </div>

      <div className="relative w-full h-[24vw] mx-auto">
        {images.map(({ src, alt, style, zIndex }, i) => {
          const isHovered = hoveredIndex === i
          return (
            <img
              key={i}
              src={src}
              alt={alt}
              className="absolute rounded-2xl shadow-lg cursor-pointer-custom transition-transform duration-300 hover:scale-105"
              style={{
                ...style,
                zIndex: isHovered ? 9999 : zIndex,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          )
        })}
      </div>

      <div className="flex flex-wrap gap-2 justify-center pt-4">
        {skills.map(skill => (
          <SkillPill key={skill} name={skill} />
        ))}
      </div>

      <ul className="px-6 pt-6">
        {descriptionPoints.map((point, i) => (
          <li
            key={i}
            className="font-dongle text-2xl text-gray-600 leading-none list-disc marker:text-gray-200"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Projects() {
  const technicalSkills = [
    "HTML5", "CSS3", "TailwindCSS", "Mantine", "Ant Design", "Material UI", "DaisyUI",
    "JavaScript", "TypeScript", "React", "VueJS", "NodeJS", "ExpressJS", "GraphQL",
    "Apollo Server/Client", "Postman", "MongoDB", "Git/GitHub", "REST APIs",
    "Figma", "Adobe XD", "AutoCAD", "OnShape"
  ]

  const workplaceSkills = [
    "Google Suite", "Adobe Suite", "Microsoft Office", "Jira", "Asana", "ClickUp",
    "Slack", "Discord", "Trello", "Everhour", "Loom", "Userback"
  ]

  const projects = [
    {
      title: "Oregon Fire Chief's Association Application (OFCA)",
      links: [
        { label: "Website", url: "https://ofca.org/" },
        { label: "GitHub", url: "https://github.com/ofca-apps/ofca-training-app" },
        { label: "Figma", url: "https://www.figma.com/design/NMs8PZ4iAELEgsIClF8lm0/OFCA-Platform-Externship?node-id=10-912&t=jRUj8KhvQlVECC3k-0" }
      ],
      images: [
        { src: ofcaOne, alt: "OFCA Application Screenshot", style: { top: 0, left: 0, width: '60%' }, zIndex: 30 },
        { src: ofcaTwo, alt: "OFCA Application Screenshot", style: { top: '4vw', left: '20%', width: '60%' }, zIndex: 20 },
        { src: ofcaThree, alt: "OFCA Application Screenshot", style: { top: '8vw', left: '40%', width: '60%' }, zIndex: 10 }
      ],
      skills: ["React", "GraphQL", "Apollo Client", "TailwindCSS", "Ant Design", "Figma", "Jira", "Discord", "GitHub"],
      descriptionPoints: [
        "Built responsive React components styled with Tailwind CSS and Ant Design, following a Figma design file to ensure UI consistency and accessibility across user roles and authenticated vs. non-authenticated screens.",
        "Integrated GraphQL and Apollo Client to manage frontend data queries and mutations, while using Keystone CMS to structure and interact with the backend database.",
        "Collaborated with OFCA developers and stakeholders via Jira, Discord, Zoom, and GitHub with a team of 12+ developers, using agile sprints to deliver scalable, maintainable features that improved workflow efficiency and user experience."
      ]
    },
    {
      title: "Anchor Application",
      links: [
        { label: "Website", url: "https://anchor.turtle-o.tech/" },
        { label: "GitHub", url: "https://github.com/mtourtelot/anchor" },
        { label: "Figma", url: "https://www.figma.com/design/3QBT97hJAlTZAg96hzKdyQ/Anchor?node-id=0-1&t=rcPg1plz4tlmNleX-0" }
      ],
      images: [
        { src: anchorOne, alt: "Anchor Project Screenshot 1", style: { top: 0, left: 0, width: '60%' }, zIndex: 30 },
        { src: anchorTwo, alt: "Anchor Project Screenshot 2", style: { top: '4vw', left: '20%', width: '60%' }, zIndex: 20 },
        { src: anchorThree, alt: "Anchor Project Screenshot 3", style: { top: '8vw', left: '40%', width: '60%' }, zIndex: 10 }
      ],
      skills: ["TypeScript", "SQL", "Supabase", "TanStack Router", "Mantine", "Figma", "Storybook"],
      descriptionPoints: [
        "Co-designed app UI/UX in Figma and implemented core frontend components using Mantine, TypeScript, and TanStack Router, with Supabase for auth and SQL data management.",
        "Led onboarding flow development and contributed to scalable component architecture with Vite and ESLint.",
        "Built a shared Storybook component library to streamline collaboration and ensure consistency across future project iterations."
      ]
    },
    {
      title: "Inscription Application",
      links: [
        { label: "GitHub", url: "https://github.com/orgs/InscriptionAI/repositories" },
        { label: "Figma", url: "https://www.figma.com/design/Xos2oqgNFYlsrHpiMmGvbv/Inscription-App?node-id=1-2&p=f&t=bBo3qJhQ9nBqP2ll-0" }
      ],
      images: [
        { src: inscriptionOne, alt: "Inscription Project Screenshot 1", style: { top: 0, left: 0, width: '60%' }, zIndex: 30 },
        { src: inscriptionTwo, alt: "Inscription Project Screenshot 2", style: { top: '4vw', left: '20%', width: '60%' }, zIndex: 20 },
        { src: inscriptionThree, alt: "Inscription Project Screenshot 3", style: { top: '8vw', left: '40%', width: '60%' }, zIndex: 10 }
      ],
      skills: ["VueJS", "OpenAI API", "Perplexity AI API", "Twilio", "ElevenLabs", "GraphQL", "Deepgram", "Figma", "AWS", "Neon"],
      descriptionPoints: [
        "Lead a team of 3 engineers to develop a desktop and mobile application, built in VueJS, designed to allow entrepreneurs to seamlessly document their business journey and receive data and insights based on the content of their entries.",
        "Data collection, summarization, and analysis using OpenAI API (GPT-4o), Perplexity AI API, Twilio, ElevenLabs, GraphQL, and Deepgram (speech-to-text).",
        "User authentication and data storage with AWS and Neon."
      ]
    },
    {
      title: "News Explorer Application",
      links: [
        { label: "GitHub", url: "https://github.com/brogers111/news_explorer" },
        { label: "Figma", url: "https://www.figma.com/design/3ottwMEhlBt95Dbn8dw1NH/Your-Final-Project?node-id=0-1&p=f&t=aJDmW53ntGnF3CJ2-0" }
      ],
      images: [
        { src: newsOne, alt: "News Explorer Project Screenshot 1", style: { top: 0, left: 0, width: '60%' }, zIndex: 30 },
        { src: newsTwo, alt: "News Explorer Project Screenshot 2", style: { top: '4vw', left: '20%', width: '60%' }, zIndex: 20 },
        { src: newsThree, alt: "News Explorer Project Screenshot 3", style: { top: '8vw', left: '40%', width: '60%' }, zIndex: 10 }
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "React", "News API", "NodeJS", "ExpressJS", "JWTs", "MongoDB", "Postman", "Bcrypt", "Celebrate", "CORS", "Winston"],
      descriptionPoints: [
        "The News Explorer application provides users with the ability to search for all the news articles over the past week based on a chosen keyword using the News API. A user is also able to sign up, log in, log out, save articles, and access those saved articles if logged in.",
        "Frontend built with Semantic HTML5, CSS3, JavaScript, React, and the News API to pull recent news articles based on the user's search request.",
        "Backend built with NodeJS, ExpressJS, JWTs, MongoDB, Postman, Bcrypt, Celebrate, CORS, and Winston to allow users to login and save interestin articles to their own unique profiles."
      ]
    },
    {
      title: "SPOTS Application",
      links: [
        { label: "Website", url: "https://brogers111.github.io/se_project_spots/" },
        { label: "Demo", url: "https://drive.google.com/file/d/1-oEg8NBMb1xg5lhtA5YEGWZHWFxISQF6/view?usp=sharing" },
        { label: "GitHub", url: "https://github.com/brogers111/se_project_spots" },
        { label: "Figma", url: "https://www.figma.com/design/1qCS9RkiKiVquBhpOJqjZ0/Sprint-5-Project--Spots?node-id=0-1&p=f&t=AuGsRO0xBtxR5OTR-0" }
      ],
      images: [
        { src: spotsOne, alt: "SPOTS Project Screenshot 1", style: { top: 0, left: 0, width: '60%' }, zIndex: 30 },
        { src: spotsTwo, alt: "SPOTS Project Screenshot 2", style: { top: '4vw', left: '20%', width: '60%' }, zIndex: 20 },
        { src: spotsThree, alt: "SPOTS Project Screenshot 3", style: { top: '8vw', left: '40%', width: '60%' }, zIndex: 10 }
      ],
      skills: ["HTML5", "CSS3", "Flexbox", "Responsive Design", "Media Queries", "JavaScript", "Figma"],
      descriptionPoints: [
        "The Spots application allows users to create profiles and upload their own unique photos of places or experiences that they'd want to share with others.",
        "Users are able to toggle modals to edit their profile name and description, upload more photos with a URL and caption, delete photos, and preview existing posts.",
        "Built with Semantic HTML5, CSS3, Flexbox, Responsive Design, Media Queries, and JavaScript.",
      ]
    }
  ]

  return (
    <>
      {/* Desktop Projects */}
      <div className="hidden md:visible px-20 py-20">
        <div>
          <p className="font-dongle text-3xl text-gray-300">REVIEW MY TECHNICAL</p>
          <h1 className="font-bluffolk text-8xl whitespace-nowrap text-gray-600">PROJECTS</h1>
        </div>

        <p className="font-dongle text-3xl text-gray-300 pt-10">OVERALL SKILLS:</p>

        <p className="font-dongle text-2xl text-gray-400">TECHNICAL:</p>
        <div className="flex flex-wrap gap-2">
          {technicalSkills.map(skill => <SkillPill key={skill} name={skill} />)}
        </div>

        <p className="font-dongle text-2xl text-gray-400 pt-4">WORKPLACE:</p>
        <div className="flex flex-wrap gap-2">
          {workplaceSkills.map(skill => <SkillPill key={skill} name={skill} />)}
        </div>

        <div className="border-b-2 border-gray-200 pt-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>

      {/* Mobile Projects */}
      <div className='md:hidden px-4 py-4'>
        <div>
          <p className="font-dongle text-3xl text-gray-300">REVIEW MY TECHNICAL</p>
          <h1 className="font-bluffolk text-8xl whitespace-nowrap text-gray-600">PROJECTS</h1>
        </div>

        <p className="font-dongle text-3xl text-gray-300 pt-10">OVERALL SKILLS:</p>

        <p className="font-dongle text-2xl text-gray-400">TECHNICAL:</p>
        <div className="flex flex-wrap gap-2">
          {technicalSkills.map(skill => <SkillPill key={skill} name={skill} />)}
        </div>

        <p className="font-dongle text-2xl text-gray-400 pt-4">WORKPLACE:</p>
        <div className="flex flex-wrap gap-2">
          {workplaceSkills.map(skill => <SkillPill key={skill} name={skill} />)}
        </div>

        <div className="border-b-2 border-gray-200 pt-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
