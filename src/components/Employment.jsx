import { useState } from 'react'
import EmploymentForm from './EmploymentForm'
import TitleButton from './TitleButton'

const Employment = ({
  onSubmit,
  editEntry,
  setterFuncEntry,
  setterFuncData,
  data,
}) => {
  const [collapse, setCollapse] = useState(false)
  const [employmentDetails, setEmploymentDetails] = useState(
    editEntry || {
      id: crypto.randomUUID(),
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
      <div className="employment__form submission">
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
            setterFuncEntry={setterFuncEntry}
            setterFuncData={setterFuncData}
            data={data}
          />
        )}
      </div>
    </div>
  )
}

export default Employment
