import { useState } from 'react'
import LanguageForm from './LanguageForm'

const Languages = ({
  onSubmit,
  editEntry,
  setterFuncEntry,
  setterFuncData,
  data,
}) => {
  const [languages, setLanguages] = useState(
    editEntry || {
      id: crypto.randomUUID(),
      language: '',
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
          languages={languages}
          setLanguages={setLanguages}
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
