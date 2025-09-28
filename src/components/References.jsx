import { useState } from 'react'
import ReferenceForm from './ReferenceForm'

const References = ({
  onSubmit,
  entryToEdit,
  setEntryToEdit,
  setData,
  data,
}) => {
  const [referenceDetails, setReferenceDetails] = useState(
    entryToEdit || {
      id: crypto.randomUUID(),
      type: 'references',
      fullName: '',
      company: '',
      phoneNumber: '',
      email: ''
    }
  )
  return (
    <div className="references">
      <h2 className="references__heading">References</h2>
      <p className="references__instructions">
        Please include a list of professional references.
      </p>
      <div className="references__form form--submit">
        <ReferenceForm
          referenceDetails={referenceDetails}
          setReferenceDetails={setReferenceDetails}
          onSubmit={onSubmit}
          setEntryToEdit={setEntryToEdit}
          setData={setData}
          data={data}
        />
      </div>
    </div>
  )
}

export default References
