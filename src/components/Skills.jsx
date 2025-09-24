import { useState } from 'react'
import SkillForm from './SkillForm'

const Skills = ({
  onSubmit,
  editEntry,
  setterFuncEntry,
  setterFuncData,
  data,
}) => {
  const [skills, setSkills] = useState(
    editEntry || {
      id: crypto.randomUUID(),
      type: 'skills',
      skill: '',
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
          skills={skills}
          setSkills={setSkills}
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
