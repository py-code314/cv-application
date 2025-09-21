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
  const [editEntry, setEditEntry] = useState(null)

  const handlePersonalDetailsSubmit = (formData) => {
    setShowForm(false)
    setPersonalDetailsData(formData)
  }
  const handleEducationSubmit = (formData) => {
    setShowForm(false)

    if (educationData.length > 0) {
      const entryExists = educationData.some(
        (prevEntry) => prevEntry.id === formData.id
      )
      if (entryExists) {
        const updatedData = educationData.map((prevEntry) =>
          prevEntry.id === formData.id ? formData : prevEntry
        )
        setEducationData(updatedData)
      } else {
        setEducationData([...educationData, formData])
      }
    } else {
      setEducationData([...educationData, formData])
    }
    setAddForm(false)
  }

  const handleEditForm = (entry) => {
    setEditEntry(entry)
    setShowForm(true)
  }

  const handleDeleteEntry = (entry) => {
    const updatedData = educationData.filter(
      (educationEntry) => educationEntry.id !== entry.id
    )
    setEducationData(updatedData)
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
              onSubmit={handleEducationSubmit}
              editEntry={editEntry}
            />
          </div>
        ) : (
          <div>
            <EducationSummary
              data={educationData}
              onEdit={handleEditForm}
              onDelete={handleDeleteEntry}
            />
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
