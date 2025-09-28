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
import SkillsSummary from './SkillsSummary'
import Languages from './Languages'
import LanguagesSummary from './LanguagesSummary'
import References from './References'
import ReferencesSummary from './ReferencesSummary'

const CVForm = ({
  showSection,
  showForm,
  setShowForm,
  showPreview,
  setShowPreview,
  personalDetailsData,
  setPersonalDetailsData,
  educationData,
  setEducationData,
  employmentData,
  setEmploymentData,
  skillsData,
  setSkillsData,
  languagesData,
  setLanguagesData,
  referencesData,
  setReferencesData,
}) => {
  const [addForm, setAddForm] = useState(false)

  const [educationToEdit, setEducationToEdit] = useState(null)
  const [employmentToEdit, setEmploymentToEdit] = useState(null)
  const [skillToEdit, setSkillToEdit] = useState(null)
  const [languageToEdit, setLanguageToEdit] = useState(null)
  const [referenceToEdit, setReferenceToEdit] = useState(null)

  const handlePersonalDetailsSubmit = (formData) => {
    setShowForm({ ...showForm, personalDetails: false })
    setShowPreview({ ...showPreview, personalDetails: true })
    setPersonalDetailsData(formData)
  }
  const handleFormDataSubmit = (
    currentForm,
    setEntryToEdit,
    setData,
    formData,
    data
  ) => {
    setShowForm({ ...showForm, [currentForm]: false })
    setShowPreview({ ...showPreview, [currentForm]: true })
    setAddForm(false)
    // Set value to null so that entryToEdit is assigned a new value each time Edit button is clicked
    setEntryToEdit(null)
    // console.log(data)
    if (data.length > 0) {
      const entryExists = data.some((prevEntry) => prevEntry.id === formData.id)
      if (entryExists) {
        const updatedData = data.map((prevEntry) =>
          prevEntry.id === formData.id ? formData : prevEntry
        )
        setData(updatedData)
      } else {
        setData([...data, formData])
      }
    } else {
      setData([...data, formData])
    }
  }

  const handlePersonalEditForm = (data) => {
    setPersonalDetailsData(data)

    setShowForm({ ...showForm, personalDetails: true })
    setShowPreview({ ...showPreview, personalDetails: false })
  }
  const handleEditForm = (setEntryToEdit, entry, entryType) => {
    // console.log(entryType)
    setEntryToEdit(entry)

    setShowForm({ ...showForm, [entryType]: true })
    setShowPreview({ ...showPreview, [entryType]: false })
  }

  const handleDeleteEntry = (data, setData, entry) => {
    const updatedData = data.filter(
      (existingEntry) => existingEntry.id !== entry.id
    )
    setData(updatedData)
    
  }

  return (
    <div className="cv-form">
      {showSection.personalDetails ? (
        showForm.personalDetails ? (
          <PersonalDetails
            personalEntry={personalDetailsData}
            onSubmit={handlePersonalDetailsSubmit}
          />
        ) : (
          <PersonalDetailsSummary
            personalEntry={personalDetailsData}
            onEdit={handlePersonalEditForm}
          />
        )
      ) : null}

      {showSection.education ? (
        showForm.education || addForm ? (
          <div>
            <Education
              addForm={addForm}
              onSubmit={handleFormDataSubmit}
              entryToEdit={educationToEdit}
              setEntryToEdit={setEducationToEdit}
              setData={setEducationData}
              data={educationData}
            />
          </div>
        ) : (
          <div>
            <EducationSummary
              data={educationData}
              onEdit={handleEditForm}
              setEntryToEdit={setEducationToEdit}
              setData={setEducationData}
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
        showForm.employment || addForm ? (
          <div>
            <Employment
              addForm={addForm}
              onSubmit={handleFormDataSubmit}
              entryToEdit={employmentToEdit}
              setEntryToEdit={setEmploymentToEdit}
              setData={setEmploymentData}
              data={employmentData}
            />
          </div>
        ) : (
          <div>
            <EmploymentSummary
              data={employmentData}
              onEdit={handleEditForm}
              setEntryToEdit={setEmploymentToEdit}
              setData={setEmploymentData}
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
        showForm.skills || addForm ? (
          <div>
            <Skills
              addForm={addForm}
              onSubmit={handleFormDataSubmit}
              entryToEdit={skillToEdit}
              setEntryToEdit={setSkillToEdit}
              setData={setSkillsData}
              data={skillsData}
            />
          </div>
        ) : (
          <div>
            <SkillsSummary
              data={skillsData}
              onEdit={handleEditForm}
              setEntryToEdit={setSkillToEdit}
              setData={setSkillsData}
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
      {showSection.languages ? (
        showForm.languages || addForm ? (
          <div>
            <Languages
              addForm={addForm}
              onSubmit={handleFormDataSubmit}
              entryToEdit={languageToEdit}
              setEntryToEdit={setLanguageToEdit}
              setData={setLanguagesData}
              data={languagesData}
            />
          </div>
        ) : (
          <div>
            <LanguagesSummary
              data={languagesData}
              onEdit={handleEditForm}
              setEntryToEdit={setLanguageToEdit}
              setData={setLanguagesData}
              onDelete={handleDeleteEntry}
            />
            <AddButton
              text="Add Language"
              setAddForm={setAddForm}
              setEmploymentData={setLanguagesData}
            />
          </div>
        )
      ) : null}
      {showSection.references ? (
        showForm.references || addForm ? (
          <div>
            <References
              addForm={addForm}
              onSubmit={handleFormDataSubmit}
              entryToEdit={referenceToEdit}
              setEntryToEdit={setReferenceToEdit}
              setData={setReferencesData}
              data={referencesData}
            />
          </div>
        ) : (
          <div>
            <ReferencesSummary
              data={referencesData}
              onEdit={handleEditForm}
              setEntryToEdit={setReferenceToEdit}
              setData={setReferencesData}
              onDelete={handleDeleteEntry}
            />
            <AddButton
              text="Add Reference"
              setAddForm={setAddForm}
              setEmploymentData={setReferencesData}
            />
          </div>
        )
      ) : null}
    </div>
  )
}

export default CVForm
