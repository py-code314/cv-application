import { useState } from 'react'
import '../styles/CVBuilder.css'
import CVForm from './CVForm'
import NavButtons from './NavButtons'

const CVBuilder = () => {
  
  const [showSection, setShowSection] = useState({
    personalDetails: true,
    education: false,
    employment: false,
    skills: false,
    languages: false,
    references: false,
  })
  const [showForm, setShowForm] = useState(true)

  const handleNextBtnClick = () => {
    if (showSection.personalDetails) {
      setShowSection({
        ...showSection,
        personalDetails: false,
        education: true,
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
      />
      <NavButtons onClick={handleNextBtnClick} showSection={showSection} />
    </div>
  )
}

export default CVBuilder
