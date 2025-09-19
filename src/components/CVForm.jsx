import { useState } from 'react'
import '../styles/CVForm.css'
import PersonalDetails from './PersonalDetails'
import PersonalDetailsSummary from './PersonalDetailsSummary'
import Education from './Education'
import AddButton from './AddButton'
import EducationSummary from './EducationSummary'

const CVForm = ({ showSection, showForm, setShowForm }) => {
  const [personalDetailsData, setPersonalDetailsData] = useState(null)

  const [educationData, setEducationData] = useState([])
  const [addForm, setAddForm] = useState(false)


  const handlePersonalDetailsSubmit = (formData) => {
    setShowForm(false)
    setPersonalDetailsData(formData)
  }
  const handleEducationSubmit = (formData) => {
    setShowForm(false)
    // setEducationData(formData)
    setEducationData((previousEducationData) => [
      ...previousEducationData,
      formData,
    ])
    setAddForm(false)
  }

  const handleEditForm = () => {
    setShowForm(true)
  }
  return (
    <div className="cv-form">
      {showSection.personalDetails ? (
        showForm ? (
          <PersonalDetails
            data={personalDetailsData}
            onSubmit={handlePersonalDetailsSubmit}
          />
        ) : (
          <PersonalDetailsSummary
            data={personalDetailsData}
            onEdit={handleEditForm}
          />
        )
      ) : null}

      {showSection.education ? (
        showForm || addForm ? (
          <div>
            <Education
              addForm={addForm}
              data={educationData}
              onSubmit={handleEducationSubmit}
            />
          </div>
        ) : (
          <div>
            <EducationSummary data={educationData} onEdit={handleEditForm} />
            <AddButton
              text="Add Degree"
              setAddForm={setAddForm}
              setEducationData={setEducationData}
            />
          </div>
        )
      ) : null}
    </div>
  )
}

export default CVForm
