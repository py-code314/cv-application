import { useState } from 'react'
import '../styles/CVForm.css'
import PersonalDetails from './PersonalDetails'
import PersonalDetailsSummary from './PersonalDetailsSummary'
import Education from './Education'
import AddButton from './AddButton'
import EducationSummary from './EducationSummary'
import Employment from './Employment'
import EmploymentSummary from './EmploymentSummary'
import Skills from './Skills'

const CVForm = ({ showSection, showForm, setShowForm }) => {
  const [personalDetailsData, setPersonalDetailsData] = useState(null)
  const [educationData, setEducationData] = useState([])
  const [employmentData, setEmploymentData] = useState([])
  const [skillsData, setSkillsData] = useState([])

  const [addForm, setAddForm] = useState(false)

  const [editEducationEntry, setEditEducationEntry] = useState(null)
  const [editEmploymentEntry, setEditEmploymentEntry] = useState(null)
  const [editSkillEntry, setEditSkillEntry] = useState(null)

  const handlePersonalDetailsSubmit = (formData) => {
    setShowForm(false)
    setPersonalDetailsData(formData)
  }
  const handleFormDataSubmit = (
    setterFuncEntry,
    setterFuncData,
    formData,
    data
  ) => {
    setShowForm(false)
    setAddForm(false)
    setterFuncEntry(null)

    if (data.length > 0) {
      const entryExists = data.some((prevEntry) => prevEntry.id === formData.id)
      if (entryExists) {
        const updatedData = data.map((prevEntry) =>
          prevEntry.id === formData.id ? formData : prevEntry
        )
        setterFuncData(updatedData)
      } else {
        setterFuncData([...data, formData])
      }
    } else {
      setterFuncData([...data, formData])
    }
  }

  const handlePersonalEditForm = (data) => {
    setPersonalDetailsData(data)
    setShowForm(true)
  }
  const handleEditForm = (setEditEntry, entry) => {
    setEditEntry(entry)
    setShowForm(true)
  }

  const handleDeleteEntry = (data, setterFuncData, entry) => {
    const updatedData = data.filter(
      (existingEntry) => existingEntry.id !== entry.id
    )
    setterFuncData(updatedData)
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
            onEdit={handlePersonalEditForm}
          />
        )
      ) : null}

      {showSection.education ? (
        showForm || addForm ? (
          <div>
            <Education
              addForm={addForm}
              onSubmit={handleFormDataSubmit}
              editEntry={editEducationEntry}
              setterFuncEntry={setEditEducationEntry}
              setterFuncData={setEducationData}
              data={educationData}
            />
          </div>
        ) : (
          <div>
            <EducationSummary
              data={educationData}
              onEdit={handleEditForm}
              setterFunc={setEditEducationEntry}
              setterFuncData={setEducationData}
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
      {showSection.employment ? (
        showForm || addForm ? (
          <div>
            <Employment
              addForm={addForm}
              onSubmit={handleFormDataSubmit}
              editEntry={editEmploymentEntry}
              setterFuncEntry={setEditEmploymentEntry}
              setterFuncData={setEmploymentData}
              data={employmentData}
            />
          </div>
        ) : (
          <div>
            <EmploymentSummary
              data={employmentData}
              onEdit={handleEditForm}
              setterFunc={setEditEmploymentEntry}
              setterFuncData={setEmploymentData}
              onDelete={handleDeleteEntry}
            />
            <AddButton
              text="Add Employment"
              setAddForm={setAddForm}
              setEmploymentData={setEmploymentData}
            />
          </div>
        )
      ) : null}
      {showSection.skills ? (
        showForm || addForm ? (
          <div>
            <Skills
              addForm={addForm}
              onSubmit={handleFormDataSubmit}
              editEntry={editSkillEntry}
              setterFuncEntry={setEditSkillEntry}
              setterFuncData={setSkillsData}
              data={skillsData}
            />
          </div>
        ) : (
          <div>
            <EmploymentSummary
              data={skillsData}
              onEdit={handleEditForm}
              setterFunc={setEditSkillEntry}
              setterFuncData={setSkillsData}
              onDelete={handleDeleteEntry}
            />
            <AddButton
              text="Add Skill"
              setAddForm={setAddForm}
              setEmploymentData={setSkillsData}
            />
          </div>
        )
      ) : null}
    </div>
  )
}

export default CVForm
