import { useState } from 'react'
import ReferenceForm from './ReferenceForm'

/* Component that handles the references section */
const References = ({
  data,
  setData,
  entryToEdit,
  setEntryToEdit,
  onSubmit,
}) => {
  // Initialize state with default values or data of the entry to be edited
  const [referenceDetails, setReferenceDetails] = useState(
    entryToEdit || {
      id: crypto.randomUUID(),
      type: 'references',
      fullName: '',
      company: '',
      phoneNumber: '',
      email: '',
    }
  )
  return (
    <div className="references">
      {/* Section heading */}
      <h2 className="references__heading">References</h2>
      <p className="references__instructions">
        Please include a list of professional references.
      </p>
      <div className="references__form form--submit">
        <ReferenceForm
          data={data}
          setData={setData}
          referenceDetails={referenceDetails}
          setReferenceDetails={setReferenceDetails}
          setEntryToEdit={setEntryToEdit}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

export default References
