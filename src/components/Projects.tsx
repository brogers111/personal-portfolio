function SkillTag({ name }: { name: string }) {
  return (
    <p className="font-dongle text-gray-400 text-2xl bg-gray-200 rounded-3xl inline px-4">
      {name}
    </p>
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

  return (
    <div className="px-20 py-20">
      {/* Section Header */}
      <div>
        <p className="font-dongle text-3xl text-gray-300">REVIEW MY TECHNICAL</p>
        <h1 className="font-bluffolk text-8xl whitespace-nowrap text-gray-600">PROJECTS</h1>
      </div>

      {/* Skills Section */}
      <p className="font-dongle text-3xl text-gray-300 pt-10">OVERALL SKILLS:</p>

      <p className="font-dongle text-2xl text-gray-400">TECHNICAL:</p>
      <div className="flex flex-wrap gap-2">
        {technicalSkills.map(skill => <SkillTag key={skill} name={skill} />)}
      </div>

      <p className="font-dongle text-2xl text-gray-400 pt-4">WORKPLACE:</p>
      <div className="flex flex-wrap gap-2">
        {workplaceSkills.map(skill => <SkillTag key={skill} name={skill} />)}
      </div>

      <div className="border-b-2 border-gray-200 pt-10"></div>
    </div>
  )
}

export default Projects
