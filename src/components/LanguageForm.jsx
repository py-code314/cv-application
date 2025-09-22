import FormButtons from './FormButtons'

const LanguageForm = ({
  languages,
  setLanguages,
  onSubmit,
  setterFuncEntry,
  setterFuncData,
  data,
}) => {
  const handleLanguageChange = (e) => {
    setLanguages({ ...languages, language: e.target.value })
  }

  const handleReset = () => {
    setLanguages({ ...languages, id: crypto.randomUUID(), language: '' })
  }

  const handleLanguageSubmit = (e) => {
    e.preventDefault()
    onSubmit(setterFuncEntry, setterFuncData, languages, data)
  }
  return (
    <div className="language-form">
      <form className="form" onSubmit={handleLanguageSubmit}>
        <div className="form__control">
          <label htmlFor="language" className="form__label">
            Language
          </label>
          <input
            type="text"
            name="language"
            id="language"
            className="form__input"
            value={languages.language}
            onChange={handleLanguageChange}
          />
        </div>

        <FormButtons onClick={handleReset} />
      </form>
    </div>
  )
}

export default LanguageForm
