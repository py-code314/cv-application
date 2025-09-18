import { useState } from 'react'
import EducationForm from './EducationForm'

import TitleButton from './TitleButton'
import '../styles/Education.css'

const Education = ({ addForm, data, onSubmit }) => {
  // console.log(data)
  const [collapse, setCollapse] = useState(false)
  const [educationDetails, setEducationDetails] = useState(data || {
    degree: '',
    schoolName: '',
    city: '',
    startDate: '',
    endDate: '',
    description: '',
  })

  return (
    <div className="education">
      <h2 className="education__heading">Education</h2>
      <p className="education__text">
        Highlight your academic achievements and qualifications. Providing
        details about your education can help recruiters understand your
        background and expertise.
      </p>
      <div className="education__form">
        <TitleButton
          educationDetails={educationDetails}
          onClick={setCollapse}
          collapse={collapse}
        />
        {(!collapse || addForm) ? (
          <EducationForm
            educationDetails={educationDetails}
            setEducationDetails={setEducationDetails}
            onSubmit={onSubmit}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Education
