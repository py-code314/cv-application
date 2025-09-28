import { useState } from 'react'
import LanguageForm from './LanguageForm'

const Languages = ({
  onSubmit,
  entryToEdit,
  setEntryToEdit,
  setData,
  data,
}) => {
  const [language, setLanguage] = useState(
    entryToEdit || {
      id: crypto.randomUUID(),
      type: 'languages',
      languageName: '',
    }
  )
  return (
    <div className="languages">
      <h2 className="languages__heading">Languages</h2>
      <p className="languages__instructions">
        List all languages in which you're proficient.
      </p>
      <div className="languages__form form--submit">
        <LanguageForm
          language={language}
          setLanguage={setLanguage}
          onSubmit={onSubmit}
          setEntryToEdit={setEntryToEdit}
          setData={setData}
          data={data}
        />
      </div>
    </div>
  )
}

export default Languages
