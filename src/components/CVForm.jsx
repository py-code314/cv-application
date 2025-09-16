import { useState } from 'react'
import '../styles/CVForm.css'
import PersonalDetails from './PersonalDetails'
import PersonalDetailsSummary from './PersonalDetailsSummary'

const CVForm = () => {
  const [showForm, setShowForm] = useState(true)
  const [submittedData, setSubmittedData] = useState(null)

  const handleFormSubmit = (formData) => {
    setShowForm(false)
    setSubmittedData(formData)
  }

  const handleEditForm = () => {
    setShowForm(true)
  }
  return (
    <div className="cv-form">
      {showForm ? (
        <PersonalDetails data={submittedData} onSubmit={handleFormSubmit} />
      ) : (
        <PersonalDetailsSummary data={submittedData} onEdit={handleEditForm} />
      )}
    </div>
  )
}

export default CVForm
