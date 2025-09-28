import { useState } from 'react'
import EmploymentForm from './EmploymentForm'
import TitleButton from './TitleButton'

const Employment = ({
  onSubmit,
  entryToEdit,
  setEntryToEdit,
  setData,
  data,
}) => {
  const [collapse, setCollapse] = useState(false)
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
          employmentDetails={employmentDetails}
          onClick={setCollapse}
          collapse={collapse}
        />
        {!collapse && (
          <EmploymentForm
            employmentDetails={employmentDetails}
            setEmploymentDetails={setEmploymentDetails}
            onSubmit={onSubmit}
            setEntryToEdit={setEntryToEdit}
            setData={setData}
            data={data}
          />
        )}
      </div>
    </div>
  )
}

export default Employment
