const CVSkills = ({ skillsData }) => {

  return (
    <div className="resume__skills section-sidebar">
      <h2 className="resume__heading">Skills</h2>
      <ul className="skills">
        {skillsData.map((skill) => (
          <li key={skill.id}>{skill.skillName}</li>
        ))}
      </ul>
    </div>
  )
}

export default CVSkills
