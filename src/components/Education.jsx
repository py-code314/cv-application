import { useState } from 'react'
import TitleButton from './TitleButton'
import EducationForm from './EducationForm'

/* Component that handles the education section */
const Education = ({
  isCollapse,
  setIsCollapse,
  data,
  setData,
  entryToEdit,
  setEntryToEdit,
  onSubmit,
}) => {
  // Initialize state with default values or data of the entry to be edited
  const [educationDetails, setEducationDetails] = useState(
    entryToEdit || {
      id: crypto.randomUUID(),
      type: 'education',
      degree: '',
      schoolName: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
    }
  )

  return (
    <div className="education">
      {/* Section heading */}
      <h2 className="education__heading">Education</h2>
      <p className="education__text">
        Highlight your academic achievements and qualifications. Providing
        details about your education can help recruiters understand your
        background and expertise.
      </p>
      <div className="education__form form--submit">
        <TitleButton
          isCollapse={isCollapse}
          onClick={setIsCollapse}
          data={educationDetails}
        />
        {!isCollapse && (
          <EducationForm
            data={data}
            setData={setData}
            educationDetails={educationDetails}
            setEducationDetails={setEducationDetails}
            setEntryToEdit={setEntryToEdit}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </div>
  )
}

export default Education
