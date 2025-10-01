import FormButtons from './FormButtons'

/* A component that renders a skill input form */
const SkillForm = ({
  data,
  setData,
  skill,
  setSkill,
  setEntryToEdit,
  onSubmit,
}) => {
  // Function to handle user input
  const handleSkillChange = (e) => {
    setSkill({ ...skill, skillName: e.target.value })
  }

  // Reset function
  const handleReset = () => {
    setSkill({
      ...skill,
      id: crypto.randomUUID(),
      type: 'skills',
      skillName: '',
    })
  }

  // Function to handle form submission
  const handleSubmitSkill = (e) => {
    e.preventDefault()
    onSubmit(e.target.id, setEntryToEdit, setData, skill, data)
  }
  return (
    <div className="skill-form">
      {/* Skill form */}
      <form className="form" id="skills" onSubmit={handleSubmitSkill}>
        {/* Skill input */}
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
