import { useState } from 'react'
import LanguageForm from './LanguageForm'

const Languages = ({
  onSubmit,
  editEntry,
  setterFuncEntry,
  setterFuncData,
  data,
}) => {
  const [language, setLanguage] = useState(
    editEntry || {
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
      <div className="languages__form submission">
        <LanguageForm
          language={language}
          setLanguage={setLanguage}
          onSubmit={onSubmit}
          setterFuncEntry={setterFuncEntry}
          setterFuncData={setterFuncData}
          data={data}
        />
      </div>
    </div>
  )
}

export default Languages
