import { useState } from 'react'
import '../styles/CVForm.css'
import PersonalDetails from './PersonalDetails'
import PersonalDetailsSummary from './PersonalDetailsSummary'
import Education from './Education'
import EducationForm from './EducationForm'
import AddButton from './AddButton'

const CVForm = ({ showSection, showForm, setShowForm }) => {
  const [submittedData, setSubmittedData] = useState(null)
  const [addClick, setAddClick] = useState(false)

  const handleFormSubmit = (formData) => {
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
          <div>
            <Education data={submittedData} onSubmit={handleFormSubmit} />
            {addClick && (
              <EducationForm data={submittedData} onSubmit={handleFormSubmit} />
            )}
            <AddButton text="Add Degree" setAddClick={setAddClick} />
          </div>
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
