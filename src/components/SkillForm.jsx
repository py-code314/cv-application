import FormButtons from './FormButtons'

const SkillForm = ({
  skills,
  setSkills,
  onSubmit,
  setterFuncEntry,
  setterFuncData,
  data,
}) => {
  const handleSkillChange = (e) => {
    setSkills({ ...skills, skill: e.target.value })
  }

  const handleReset = () => {
    setSkills({ ...skills, id: crypto.randomUUID(), type: 'skills', skill: '' })
  }

  const handleSkillSubmit = (e) => {
    e.preventDefault()
    onSubmit(setterFuncEntry, setterFuncData, skills, data)
  }
  return (
    <div className="skill-form">
      <form className="form" onSubmit={handleSkillSubmit}>
        <div className="form__control">
          <label htmlFor="skill" className="form__label">
            Skill
          </label>
          <input
            type="text"
            name="skill"
            id="skill"
            className="form__input"
            value={skills.skill}
            onChange={handleSkillChange}
          />
        </div>

        <FormButtons onClick={handleReset} />
      </form>
    </div>
  )
}

export default SkillForm
