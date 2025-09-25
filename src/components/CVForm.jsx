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

  const [editEducationEntry, setEditEducationEntry] = useState(null)
  const [editEmploymentEntry, setEditEmploymentEntry] = useState(null)
  const [editSkillEntry, setEditSkillEntry] = useState(null)
  const [editLanguageEntry, setEditLanguageEntry] = useState(null)
  const [editReferenceEntry, setEditReferenceEntry] = useState(null)

  const handlePersonalDetailsSubmit = (formData) => {
    setShowForm({ ...showForm, personalDetails: false })
    setShowPreview({ ...showPreview, personalDetails: true })
    setPersonalDetailsData(formData)
  }
  const handleFormDataSubmit = (
    currentForm,
    setterFuncEntry,
    setterFuncData,
    formData,
    data
  ) => {
    setShowForm({ ...showForm, [currentForm]: false })
    setShowPreview({ ...showPreview, [currentForm]: true })
    setAddForm(false)
    setterFuncEntry(null)
    console.log(data)
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

    setShowForm({ ...showForm, personalDetails: true })
    setShowPreview({ ...showPreview, personalDetails: false })
  }
  const handleEditForm = (setEditEntry, entry, currentForm) => {
    console.log(currentForm)
    setEditEntry(entry)

    setShowForm({ ...showForm, [currentForm]: true })
    setShowPreview({ ...showPreview, [currentForm]: false })
  }

  const handleDeleteEntry = (data, setterFuncData, entry) => {
    const updatedData = data.filter(
      (existingEntry) => existingEntry.id !== entry.id
    )
    setterFuncData(updatedData)
    // TODO: Update showForm and showPreview after deleting an entry?
  }

  return (
    <div className="cv-form">
      {showSection.personalDetails ? (
        showForm.personalDetails ? (
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
        showForm.education || addForm ? (
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
              setterFuncEntry={setEditEducationEntry}
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
        showForm.employment || addForm ? (
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
              setterFuncEntry={setEditEmploymentEntry}
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
        showForm.skills || addForm ? (
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
            <SkillsSummary
              data={skillsData}
              onEdit={handleEditForm}
              setterFuncEntry={setEditSkillEntry}
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
      {showSection.languages ? (
        showForm.languages || addForm ? (
          <div>
            <Languages
              addForm={addForm}
              onSubmit={handleFormDataSubmit}
              editEntry={editLanguageEntry}
              setterFuncEntry={setEditLanguageEntry}
              setterFuncData={setLanguagesData}
              data={languagesData}
            />
          </div>
        ) : (
          <div>
            <LanguagesSummary
              data={languagesData}
              onEdit={handleEditForm}
              setterFuncEntry={setEditLanguageEntry}
              setterFuncData={setLanguagesData}
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
              editEntry={editReferenceEntry}
              setterFuncEntry={setEditReferenceEntry}
              setterFuncData={setReferencesData}
              data={referencesData}
            />
          </div>
        ) : (
          <div>
            <ReferencesSummary
              data={referencesData}
              onEdit={handleEditForm}
              setterFuncEntry={setEditReferenceEntry}
              setterFuncData={setReferencesData}
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
