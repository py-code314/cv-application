import { useState } from 'react'
import TitleButton from './TitleButton'
import EmploymentForm from './EmploymentForm'

/* Component that handles the employment section */
const Employment = ({
  isCollapse,
  setIsCollapse,
  data,
  setData,
  entryToEdit,
  setEntryToEdit,
  onSubmit,
}) => {
  // Initialize state with default values or data of the entry to be edited
  const [employmentDetails, setEmploymentDetails] = useState(
    entryToEdit || {
      id: crypto.randomUUID(),
      type: 'employment',
      jobTitle: '',
      employer: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
    }
  )
  return (
    <div className="employment">
      {/* Section heading */}
      <h2 className="employment__heading">Employment</h2>
      <ul className="employment__instructions">
        <li>List your work history starting with your most recent role.</li>
        <li>
          Use bullet points to note your achievements, if possible - use
          numbers/facts.
        </li>
      </ul>
      <div className="employment__form form--submit">
        <TitleButton
          isCollapse={isCollapse}
          onClick={setIsCollapse}
          data={employmentDetails}
        />
        {!isCollapse && (
          <EmploymentForm
            data={data}
            setData={setData}
            employmentDetails={employmentDetails}
            setEmploymentDetails={setEmploymentDetails}
            setEntryToEdit={setEntryToEdit}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </div>
  )
}

export default Employment
