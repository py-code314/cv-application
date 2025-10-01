/* A component that displays a list of skills */
const PreviewSkills = ({ skillsData }) => {
  return (
    <div className="preview__skills section-sidebar">
      {/* Section heading */}
      <h2 className="preview__heading">Skills</h2>
      {/* List of skills */}
      <ul className="skills">
        {skillsData.map((skill) => (
          <li key={skill.id}>{skill.skillName}</li>
        ))}
      </ul>
    </div>
  )
}

export default PreviewSkills
