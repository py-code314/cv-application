const PreviewSkills = ({ skillsData }) => {
  // console.log(skillsData)
  return (
    <div className="preview__skills section-preview">
      <h2>Skills</h2>
      <ul className="skills">
        {skillsData.map((skill) => (
          <li key={skill.id}>{skill.skillName}</li>
        ))}
      </ul>
    </div>
  )
}

export default PreviewSkills
