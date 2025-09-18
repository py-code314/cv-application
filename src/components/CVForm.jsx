import { useState } from 'react'
import '../styles/CVForm.css'
import PersonalDetails from './PersonalDetails'
import PersonalDetailsSummary from './PersonalDetailsSummary'
import Education from './Education'
import EducationForm from './EducationForm'
import AddButton from './AddButton'
import EducationSummary from './EducationSummary'

const CVForm = ({ showSection, showForm, setShowForm }) => {
  // const [submittedData, setSubmittedData] = useState(null)
  const [personalDetailsData, setPersonalDetailsData] = useState(null)
  const [educationData, setEducationData] = useState(null)
  const [addForm, setAddForm] = useState(false)

  // const handleFormSubmit = (formData) => {
  //   setShowForm(false)
  //   setSubmittedData(formData)
  // }
  const handlePersonalDetailsSubmit = (formData) => {
    setShowForm(false)
    setPersonalDetailsData(formData)
  }
  const handleEducationSubmit = (formData) => {
    setShowForm(false)
    setEducationData(formData)
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
        showForm ? (
          <div>
            <Education
              addForm={addForm}
              data={educationData}
              onSubmit={handleEducationSubmit}
            />
            <AddButton text="Add Degree" setAddForm={setAddForm} />
          </div>
        ) : (
          <EducationSummary data={educationData} onEdit={handleEditForm} />
        )
      ) : null}
    </div>
  )
}

export default CVForm
