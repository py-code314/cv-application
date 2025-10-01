/* A component that displays a list of skills */
const CVSkills = ({ skillsData }) => {
  return (
    <div className="resume__skills section-sidebar">
      {/* Section heading */}
      <h2 className="resume__heading">Skills</h2>
      {/* List of skills */}
      <ul className="skills">
        {skillsData.map((skill) => (
          <li key={skill.id}>{skill.skillName}</li>
        ))}
      </ul>
    </div>
  )
}

export default CVSkills
