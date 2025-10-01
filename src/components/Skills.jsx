import { useState } from 'react'
import SkillForm from './SkillForm'

/* A component that renders a skills section */
const Skills = ({ data, setData, entryToEdit, setEntryToEdit, onSubmit }) => {
  // Initialize state with default values or data of the entry to be edited
  const [skill, setSkill] = useState(
    entryToEdit || {
      id: crypto.randomUUID(),
      type: 'skills',
      skillName: '',
    }
  )
  return (
    <div className="skills">
      {/* Section heading */}
      <h2 className="skills__heading">Skills</h2>
      <p className="skills__instructions">
        Choose 5 important skills that show you fit the position. Make sure they
        match the key skills mentioned in the job listing.
      </p>
      <div className="skills__form form--submit">
        <SkillForm
          data={data}
          setData={setData}
          skill={skill}
          setSkill={setSkill}
          setEntryToEdit={setEntryToEdit}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

export default Skills
