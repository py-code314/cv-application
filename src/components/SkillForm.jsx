import FormButtons from './FormButtons'

const SkillForm = ({
  data,
  setData,
  skill,
  setSkill,
  setEntryToEdit,
  onSubmit,
}) => {
  const handleSkillChange = (e) => {
    setSkill({ ...skill, skillName: e.target.value })
  }

  const handleReset = () => {
    setSkill({
      ...skill,
      id: crypto.randomUUID(),
      type: 'skills',
      skillName: '',
    })
  }

  const handleSubmitSkill = (e) => {
    e.preventDefault()
    onSubmit(e.target.id, setEntryToEdit, setData, skill, data)
  }
  return (
    <div className="skill-form">
      <form className="form" id="skills" onSubmit={handleSubmitSkill}>
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

        <FormButtons onCancel={handleReset} />
      </form>
    </div>
  )
}

export default SkillForm
