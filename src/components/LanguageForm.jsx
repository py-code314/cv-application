import FormButtons from './FormButtons'

/* A component that renders a language input */
const LanguageForm = ({
  data,
  setData,
  language,
  setLanguage,
  setEntryToEdit,
  onSubmit,
}) => {
  // Function to handle user input
  const handleLanguageChange = (e) => {
    setLanguage({ ...language, languageName: e.target.value })
  }

  // Reset function
  const handleReset = () => {
    setLanguage({
      ...language,
      id: crypto.randomUUID(),
      type: 'languages',
      languageName: '',
    })
  }

  // Function to handle form submission
  const handleSubmitLanguage = (e) => {
    e.preventDefault()
    onSubmit(e.target.id, setEntryToEdit, setData, language, data)
  }
  return (
    <div className="language-form">
      <form className="form" id="languages" onSubmit={handleSubmitLanguage}>
        {/* Language input */}
        <div className="form__control">
          <label htmlFor="language" className="form__label">
            Language
          </label>
          <input
            type="text"
            name="language"
            id="language"
            className="form__input"
            value={language.languageName}
            onChange={handleLanguageChange}
          />
        </div>

        <FormButtons onCancel={handleReset} />
      </form>
    </div>
  )
}

export default LanguageForm
