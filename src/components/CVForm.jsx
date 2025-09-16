import { useState } from 'react'
import '../styles/CVForm.css'
import PersonalDetails from './PersonalDetails'
import PersonalDetailsSummary from './PersonalDetailsSummary'
import EducationForm from './Education'

const CVForm = ({ showSection, showForm, setShowForm }) => {
  const [submittedData, setSubmittedData] = useState(null)

  const handleFormSubmit = (formData) => {
    // e.preventDefault()
    setShowForm(false)
    setSubmittedData(formData)
  }

  const handleEditForm = () => {
    setShowForm(true)
  }
  return (
    <div className="cv-form">
      {showSection.personalDetails ? (
        showForm ? (
          <PersonalDetails data={submittedData} onSubmit={handleFormSubmit} />
        ) : (
          <PersonalDetailsSummary
            data={submittedData}
            onEdit={handleEditForm}
          />
        )
      ) : null}

      {showSection.education ? (
        showForm ? (
          <EducationForm data={submittedData} onSubmit={handleFormSubmit} />
        ) : (
          <EducationDetailsSummary
            data={submittedData}
            onEdit={handleEditForm}
          />
        )
      ) : null}
    </div>
  )
}

export default CVForm
