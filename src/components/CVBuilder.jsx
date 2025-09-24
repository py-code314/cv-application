import { useState } from 'react'
import '../styles/CVBuilder.css'
import CVForm from './CVForm'
import NavButtons from './NavButtons'

const CVBuilder = ({
  showForm,
  setShowForm,
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
  const sections = [
    'personalDetails',
    'education',
    'employment',
    'skills',
    'languages',
    'references',
  ]

  const [showSection, setShowSection] = useState({
    personalDetails: true,
    education: false,
    employment: false,
    skills: false,
    languages: false,
    references: false,
  })

  const handleNextBtnClick = () => {
    const currentSection = Object.keys(showSection).find(
      (key) => showSection[key]
    )

    const currentSectionIndex = sections.indexOf(currentSection)

    if (currentSectionIndex < sections.length - 1) {
      const nextSection = sections[currentSectionIndex + 1]

      setShowSection({
        ...showSection,
        [currentSection]: false,
        [nextSection]: true,
      })
    }

    setShowForm(true)
  }

  const handlePrevBtnClick = () => {
    const currentSection = Object.keys(showSection).find(
      (key) => showSection[key]
    )

    const currentSectionIndex = sections.indexOf(currentSection)

    if (currentSectionIndex >= 1) {
      const prevSection = sections[currentSectionIndex - 1]

      setShowSection({
        ...showSection,
        [currentSection]: false,
        [prevSection]: true,
      })
    }

    setShowForm(true)
  }

  return (
    <div className="cv-build">
      <CVForm
        showSection={showSection}
        showForm={showForm}
        setShowForm={setShowForm}
        personalDetailsData={personalDetailsData}
        setPersonalDetailsData={setPersonalDetailsData}
        educationData={educationData}
        setEducationData={setEducationData}
        employmentData={employmentData}
        setEmploymentData={setEmploymentData}
        skillsData={skillsData}
        setSkillsData={setSkillsData}
        languagesData={languagesData}
        setLanguagesData={setLanguagesData}
        referencesData={referencesData}
        setReferencesData={setReferencesData}
      />

      <NavButtons
        onClickPrevious={handlePrevBtnClick}
        onClickNext={handleNextBtnClick}
        showSection={showSection}
      />
    </div>
  )
}

export default CVBuilder
