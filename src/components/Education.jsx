import { useState } from 'react'
import EducationForm from './EducationForm'

import TitleButton from './TitleButton'
import '../styles/Education.css'

const Education = () => {
  const [collapse, setCollapse] = useState(false)
  const [educationDetails, setEducationDetails] = useState({
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
        {!collapse ? (
          <EducationForm
            educationDetails={educationDetails}
            setEducationDetails={setEducationDetails}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Education
