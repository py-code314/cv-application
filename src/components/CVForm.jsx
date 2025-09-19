import { useState } from 'react'
import '../styles/CVForm.css'
import PersonalDetails from './PersonalDetails'
import PersonalDetailsSummary from './PersonalDetailsSummary'
import Education from './Education'
import EducationForm from './EducationForm'
import AddButton from './AddButton'
import EducationSummary from './EducationSummary'

const CVForm = ({ showSection, showForm, setShowForm }) => {
  const [personalDetailsData, setPersonalDetailsData] = useState(null)
  const [educationData, setEducationData] = useState(null)
  const [addForm, setAddForm] = useState(false)
  // console.log(educationData)
  // console.log('showSection.education:', showSection.education)
  // console.log('showForm:', showForm)
  // console.log('addForm:', addForm)

  const handlePersonalDetailsSubmit = (formData) => {
    setShowForm(false)
    setPersonalDetailsData(formData)
  }
  const handleEducationSubmit = (formData) => {
    setShowForm(false)
    setEducationData(formData)
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
