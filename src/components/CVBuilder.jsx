import '../styles/CVBuilder.css'
import CVForm from './CVForm'
import NavButtons from './NavButtons'

const CVBuilder = ({
  setShowCVBuilder,
  setShowCVPreview,
  setShowCV,
  showSection,
  setShowSection,
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
  const sections = [
    'personalDetails',
    'education',
    'employment',
    'skills',
    'languages',
    'references',
  ]

  const handleNavigation = (e) => {
    const isNextBtn =
      e.currentTarget.textContent.split(':')[0].toLowerCase() === 'next'
    // console.log(isNextBtn)
    const isDoneBtn = e.currentTarget.textContent.toLowerCase() === 'done'
    const isPrevBtn =
      e.currentTarget.textContent.split(':')[0].toLowerCase() === 'previous'
    // console.log(isPrevBtn)
    const currentSection = Object.keys(showSection).find(
      (key) => showSection[key]
    )
    const currentSectionIndex = sections.indexOf(currentSection)

    if (isNextBtn && currentSectionIndex < sections.length - 1) {
      const nextSection = sections[currentSectionIndex + 1]

      setShowSection((prevShowSection) => ({
        ...prevShowSection,
        [currentSection]: false,
        [nextSection]: true,
      }))

      setShowForm((prevShowForm) => ({
        ...prevShowForm,
        [currentSection]: false,
        [nextSection]: true,
      }))
    }

    if (isDoneBtn) {
      setShowCVBuilder(false)
      setShowCVPreview(false)
      setShowCV(true)
    }

    if (isPrevBtn && currentSectionIndex >= 1) {
      const prevSection = sections[currentSectionIndex - 1]

      setShowSection((prevShowSection) => ({
        ...prevShowSection,
        [currentSection]: false,
        [prevSection]: true,
      }))

      setShowForm((prevShowForm) => ({
        ...prevShowForm,
        [currentSection]: false,
        [prevSection]: true,
      }))
    }
  }

  return (
    <div className="cv-build">
      <CVForm
        showSection={showSection}
        showForm={showForm}
        setShowForm={setShowForm}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
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
        showSection={showSection}
        onClickNext={handleNavigation}
        onClickPrevious={handleNavigation}
      />
    </div>
  )
}

export default CVBuilder
