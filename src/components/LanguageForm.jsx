import FormButtons from './FormButtons'

const LanguageForm = ({
  language,
  setLanguage,
  onSubmit,
  setEntryToEdit,
  setData,
  data,
}) => {
  const handleLanguageChange = (e) => {
    setLanguage({ ...language, languageName: e.target.value })
  }

  const handleReset = () => {
    setLanguage({
      ...language,
      id: crypto.randomUUID(),
      type: 'languages',
      languageName: '',
    })
  }

  const handleLanguageSubmit = (e) => {
    e.preventDefault()
    onSubmit(e.target.id, setEntryToEdit, setData, language, data)
  }
  return (
    <div className="language-form">
      <form className="form" id='languages' onSubmit={handleLanguageSubmit}>
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

        <FormButtons onClick={handleReset} />
      </form>
    </div>
  )
}

export default LanguageForm
