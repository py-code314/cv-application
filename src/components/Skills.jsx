import { useState } from 'react'
import SkillForm from './SkillForm'

const Skills = ({
  onSubmit,
  editEntry,
  setterFuncEntry,
  setterFuncData,
  data,
}) => {
  const [skill, setSkill] = useState(
    editEntry || {
      id: crypto.randomUUID(),
      type: 'skills',
      skillName: '',
    }
  )
  return (
    <div className="skills">
      <h2 className="skills__heading">Skills</h2>
      <p className="skills__instructions">
        Choose 5 important skills that show you fit the position. Make sure they
        match the key skills mentioned in the job listing.
      </p>
      <div className="skills__form submission">
        <SkillForm
          skill={skill}
          setSkill={setSkill}
          onSubmit={onSubmit}
          setterFuncEntry={setterFuncEntry}
          setterFuncData={setterFuncData}
          data={data}
        />
      </div>
    </div>
  )
}

export default Skills
