import { useState } from 'react'
import '../styles/CVForm.css'
import PersonalDetails from './PersonalDetails'
import PersonalDetailsSummary from './PersonalDetailsSummary'
import Education from './Education'
import EducationSummary from './EducationSummary'
import Employment from './Employment'
import EmploymentSummary from './EmploymentSummary'
import Skills from './Skills'
import SkillsSummary from './SkillsSummary'
import Languages from './Languages'
import LanguagesSummary from './LanguagesSummary'
import References from './References'
import ReferencesSummary from './ReferencesSummary'
import AddButton from './AddButton'

const CVForm = ({
  showSection,
  showForm,
  setShowForm,
  // showPreview,
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
  const [isCollapse, setIsCollapse] = useState(false)

  const [educationToEdit, setEducationToEdit] = useState(null)
  const [employmentToEdit, setEmploymentToEdit] = useState(null)
  const [skillToEdit, setSkillToEdit] = useState(null)
  const [languageToEdit, setLanguageToEdit] = useState(null)
  const [referenceToEdit, setReferenceToEdit] = useState(null)

  const handleSubmitPersonalDetails = (formData) => {
    setShowForm((prevShowForm) => ({ ...prevShowForm, personalDetails: false }))
    setShowPreview((prevShowPreview) => ({
      ...prevShowPreview,
      personalDetails: true,
    }))
    setPersonalDetailsData(formData)
  }

  const handleSubmitFormData = (
    currentFormName,
    setEntryToEdit,
    setData,
    formData,
    existingData
  ) => {
    setShowForm((prevShowForm) => ({
      ...prevShowForm,
      [currentFormName]: false,
    }))
    setShowPreview((prevShowPreview) => ({
      ...prevShowPreview,
      [currentFormName]: true,
    }))
    setAddForm(false)
    // Set value to null so that entryToEdit is assigned a new value each time Edit button is clicked
    setEntryToEdit(null)
    // console.log(existingData)

    if (existingData.length > 0) {
      const entryExists = existingData.some(
        (prevEntry) => prevEntry.id === formData.id
      )
      if (entryExists) {
        const updatedData = existingData.map((prevEntry) =>
          prevEntry.id === formData.id ? formData : prevEntry
        )
        setData(updatedData)
      } else {
        setData([...existingData, formData])
      }
    } else {
      setData([...existingData, formData])
    }
  }

  const handleEditPersonalDetails = (personalDetails) => {
    setPersonalDetailsData(personalDetails)
    setShowForm((prevShowForm) => ({ ...prevShowForm, personalDetails: true }))
  }

  const handleEditEntry = (setEntryToEdit, entry, entryType) => {
    // console.log(entryType)
    setEntryToEdit(entry)
    setShowForm((prevShowForm) => ({ ...prevShowForm, [entryType]: true }))
  }

  const handleDeleteEntry = (data, setData, entry) => {
    const updatedData = data.filter(
      (existingEntry) => existingEntry.id !== entry.id
    )
    setData(updatedData)
  }

  const handleEntry = (e, entryId, data, setData, setEntryToEdit) => {
    const buttonId = e.currentTarget.id
    // console.log(buttonId)
    if (buttonId === 'edit-btn') {
      data.map(
        (entry) =>
          entry.id === entryId &&
          handleEditEntry(setEntryToEdit, entry, entry.type)
      )
    } else if (buttonId === 'delete-btn') {
      data.map(
        (entry) =>
          entry.id === entryId && handleDeleteEntry(data, setData, entry)
      )
    }
  }

  return (
    <div className="cv-form">
      {showSection.personalDetails ? (
        showForm.personalDetails ? (
          <PersonalDetails
            personalEntry={personalDetailsData}
            onSubmit={handleSubmitPersonalDetails}
          />
        ) : (
          <PersonalDetailsSummary
            personalEntry={personalDetailsData}
            onEdit={handleEditPersonalDetails}
          />
        )
      ) : null}

      {showSection.education ? (
        showForm.education || addForm ? (
          <div>
            <Education
              isCollapse={isCollapse}
              setIsCollapse={setIsCollapse}
              data={educationData}
              setData={setEducationData}
              entryToEdit={educationToEdit}
              setEntryToEdit={setEducationToEdit}
              onSubmit={handleSubmitFormData}
            />
          </div>
        ) : (
          <div>
            <EducationSummary
              data={educationData}
              setData={setEducationData}
              setEntryToEdit={setEducationToEdit}
              handleEntry={handleEntry}
            />
            <AddButton buttonText="Add Degree" setAddForm={setAddForm} />
          </div>
        )
      ) : null}
      {showSection.employment ? (
        showForm.employment || addForm ? (
          <div>
            <Employment
              isCollapse={isCollapse}
              setIsCollapse={setIsCollapse}
              data={employmentData}
              setData={setEmploymentData}
              entryToEdit={employmentToEdit}
              setEntryToEdit={setEmploymentToEdit}
              onSubmit={handleSubmitFormData}
            />
          </div>
        ) : (
          <div>
            <EmploymentSummary
              data={employmentData}
              setData={setEmploymentData}
              setEntryToEdit={setEmploymentToEdit}
              handleEntry={handleEntry}
            />
            <AddButton buttonText="Add Employment" setAddForm={setAddForm} />
          </div>
        )
      ) : null}
      {showSection.skills ? (
        showForm.skills || addForm ? (
          <div>
            <Skills
              data={skillsData}
              setData={setSkillsData}
              entryToEdit={skillToEdit}
              setEntryToEdit={setSkillToEdit}
              onSubmit={handleSubmitFormData}
            />
          </div>
        ) : (
          <div>
            <SkillsSummary
              data={skillsData}
              setData={setSkillsData}
              setEntryToEdit={setSkillToEdit}
              handleEntry={handleEntry}
            />
            <AddButton buttonText="Add Skill" setAddForm={setAddForm} />
          </div>
        )
      ) : null}
      {showSection.languages ? (
        showForm.languages || addForm ? (
          <div>
            <Languages
              data={languagesData}
              setData={setLanguagesData}
              entryToEdit={languageToEdit}
              setEntryToEdit={setLanguageToEdit}
              onSubmit={handleSubmitFormData}
            />
          </div>
        ) : (
          <div>
            <LanguagesSummary
              data={languagesData}
              setData={setLanguagesData}
              setEntryToEdit={setLanguageToEdit}
              handleEntry={handleEntry}
            />
            <AddButton buttonText="Add Language" setAddForm={setAddForm} />
          </div>
        )
      ) : null}
      {showSection.references ? (
        showForm.references || addForm ? (
          <div>
            <References
              data={referencesData}
              setData={setReferencesData}
              entryToEdit={referenceToEdit}
              setEntryToEdit={setReferenceToEdit}
              onSubmit={handleSubmitFormData}
            />
          </div>
        ) : (
          <div>
            <ReferencesSummary
              data={referencesData}
              setData={setReferencesData}
              setEntryToEdit={setReferenceToEdit}
              handleEntry={handleEntry}
            />
            <AddButton buttonText="Add Reference" setAddForm={setAddForm} />
          </div>
        )
      ) : null}
    </div>
  )
}

export default CVForm
