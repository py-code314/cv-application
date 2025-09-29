import '../styles/CVBuilder.css'
import CVForm from './CVForm'
import NavButtons from './NavButtons'

const CVBuilder = ({
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
  setShowResume,
  setShowResumeBuilder,
  setShowResumePreview,
}) => {
  const sections = [
    'personalDetails',
    'education',
    'employment',
    'skills',
    'languages',
    'references',
  ]

  const handleNextBtnClick = (e) => {
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

      setShowForm({
        ...showForm,
        [currentSection]: false,
        [nextSection]: true,
      })
    }

    const btnText = e.currentTarget.textContent.toLowerCase()
    // console.log(btnText)

    if (btnText === 'done') {
      setShowResume(true)
      setShowResumeBuilder(false)
      setShowResumePreview(false)
    }
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

      setShowForm({
        ...showForm,
        [currentSection]: false,
        [prevSection]: true,
      })
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
        onClickPrevious={handlePrevBtnClick}
        onClickNext={handleNextBtnClick}
        showSection={showSection}
      />
    </div>
  )
}

export default CVBuilder
