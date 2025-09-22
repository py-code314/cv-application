import FormButtons from './FormButtons'

const Skill = ({
  skill,
  setSkill,
  onSubmit,
  setterFuncEntry,
  setterFuncData,
  data,
}) => {
  const handleSkillChange = (e) => {
    setSkill(e.target.value)
  }

  const handleReset = () => {
    setSkill('')
  }

  const handleSkillSubmit = (e) => {
    e.preventDefault()
    onSubmit(setterFuncEntry, setterFuncData, skill, data)
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
            value={skill}
            onChange={handleSkillChange}
          />
        </div>

        <FormButtons onClick={handleReset} />
      </form>
    </div>
  )
}

export default Skill
