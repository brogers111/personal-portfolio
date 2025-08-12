import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

// Project Photos
import ofcaOne from '../assets/project-photos/ofca-1.png'
import ofcaTwo from '../assets/project-photos/ofca-2.png'
import ofcaThree from '../assets/project-photos/ofca-3.png'

function SkillPill({ name }: { name: string }) {
  return (
    <p className="font-dongle text-gray-400 text-2xl bg-gray-100 rounded-3xl inline px-4">
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
  return (
    <div className="mt-10 p-4 border-2 border-gray-100 rounded-2xl">
      <p className="pb-2 font-dongle text-3xl text-gray-600 leading-none">{title}</p>

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
        {images.map(({ src, alt, style, zIndex }, i) => (
          <img
            key={i}
            src={src}
            alt={alt}
            className="absolute rounded-2xl shadow-lg cursor-pointer-custom transition-transform duration-300 hover:scale-105 hover:z-50"
            style={{ ...style, zIndex }}
          />
        ))}
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
      title: "Example Project Title",
      links: [
        { label: "Website", url: "#" },
        { label: "GitHub", url: "#" },
        { label: "Figma", url: "#" }
      ],
      images: [
        { src: ofcaOne, alt: "Example Project Screenshot 1", style: { top: 0, left: 0, width: '60%' }, zIndex: 30 },
        { src: ofcaTwo, alt: "Example Project Screenshot 2", style: { top: '4vw', left: '20%', width: '60%' }, zIndex: 20 },
        { src: ofcaThree, alt: "Example Project Screenshot 3", style: { top: '8vw', left: '40%', width: '60%' }, zIndex: 10 }
      ],
      skills: ["ExampleSkill1", "ExampleSkill2", "ExampleSkill3"],
      descriptionPoints: [
        "This is a sample description point to show how your project details will be displayed.",
        "You can replace this with your real project descriptions and add as many points as needed.",
        "Make sure to customize links, images, skills, and descriptions per project."
      ]
    }
  ]

  return (
    <div className="px-20 py-20">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
