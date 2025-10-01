import { useState } from 'react'
import LanguageForm from './LanguageForm'

const Languages = ({
  data,
  setData,
  entryToEdit,
  setEntryToEdit,
  onSubmit,
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
          data={data}
          setData={setData}
          language={language}
          setLanguage={setLanguage}
          setEntryToEdit={setEntryToEdit}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

export default Languages
