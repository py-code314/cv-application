import { useState } from 'react'
import EducationForm from './EducationForm'
import TitleButton from './TitleButton'

const Education = ({
  onSubmit,
  editEntry,
  setterFuncEntry,
  setterFuncData,
  data,
}) => {

  const [collapse, setCollapse] = useState(false)
  const [educationDetails, setEducationDetails] = useState(
    editEntry || {
      id: crypto.randomUUID(),
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
      <h2 className="education__heading">Education</h2>
      <p className="education__text">
        Highlight your academic achievements and qualifications. Providing
        details about your education can help recruiters understand your
        background and expertise.
      </p>
      <div className="education__form submission">
        <TitleButton
          educationDetails={educationDetails}
          onClick={setCollapse}
          collapse={collapse}
        />
        {!collapse && (
          <EducationForm
            educationDetails={educationDetails}
            setEducationDetails={setEducationDetails}
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

export default Education
