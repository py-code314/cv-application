import FormButtons from './FormButtons'

const SkillForm = ({
  skill,
  setSkill,
  onSubmit,
  setterFuncEntry,
  setterFuncData,
  data,
}) => {
  const handleSkillChange = (e) => {
    setSkill({ ...skill, skillName: e.target.value })
  }

  const handleReset = () => {
    setSkill({ ...skill, id: crypto.randomUUID(), type: 'skills', skillName: '' })
  }

  const handleSkillSubmit = (e) => {
    e.preventDefault()
    onSubmit(e.target.id, setterFuncEntry, setterFuncData, skill, data)
  }
  return (
    <div className="skill-form">
      <form className="form" id='skills' onSubmit={handleSkillSubmit}>
        <div className="form__control">
          <label htmlFor="skill" className="form__label">
            Skill
          </label>
          <input
            type="text"
            name="skill"
            id="skill"
            className="form__input"
            value={skill.skillName}
            onChange={handleSkillChange}
          />
        </div>

        <FormButtons onClick={handleReset} />
      </form>
    </div>
  )
}

export default SkillForm
