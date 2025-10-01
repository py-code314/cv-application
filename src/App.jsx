import { useState } from 'react'
import './App.css'
import CVBuilder from './components/CVBuilder'
import CVPreview from './components/CVPreview'
import CVPage from './components/CVPage'

/* App component renders a CV builder, a CV preview and a CV page based on the state of the application */
function App() {
  // State variables
  const [showCVBuilder, setShowCVBuilder] = useState(true)
  const [showCVPreview, setShowCVPreview] = useState(true)
  const [showCV, setShowCV] = useState(false)

  const [personalDetailsData, setPersonalDetailsData] = useState(null)
  const [educationData, setEducationData] = useState([])
  const [employmentData, setEmploymentData] = useState([])
  const [skillsData, setSkillsData] = useState([])
  const [languagesData, setLanguagesData] = useState([])
  const [referencesData, setReferencesData] = useState([])

  const [showSection, setShowSection] = useState({
    personalDetails: true,
    education: false,
    employment: false,
    skills: false,
    languages: false,
    references: false,
  })

  const [showForm, setShowForm] = useState({
    personalDetails: true,
    education: false,
    employment: false,
    skills: false,
    languages: false,
    references: false,
  })

  const [showPreview, setShowPreview] = useState({
    personalDetails: false,
    education: false,
    employment: false,
    skills: false,
    languages: false,
    references: false,
  })

  // Function to handle the back button
  const handleBackBtn = () => {
    setShowCV(false)
    setShowCVBuilder(true)
    setShowCVPreview(true)
  }

  return (
    <main className="main">
      {/* Title */}
      <h1 className="title">NextStep</h1>
      <div className="container">
        {showCVBuilder && (
          <CVBuilder
            setShowCVBuilder={setShowCVBuilder}
            setShowCVPreview={setShowCVPreview}
            setShowCV={setShowCV}
            showSection={showSection}
            setShowSection={setShowSection}
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
        )}

        {showCVPreview && (
          <CVPreview
            showPreview={showPreview}
            personalDetailsData={personalDetailsData}
            employmentData={employmentData}
            educationData={educationData}
            languagesData={languagesData}
            skillsData={skillsData}
            referencesData={referencesData}
          />
        )}

        {showCV && (
          <CVPage
            showPreview={showPreview}
            personalDetailsData={personalDetailsData}
            employmentData={employmentData}
            educationData={educationData}
            languagesData={languagesData}
            skillsData={skillsData}
            referencesData={referencesData}
            handleBackBtn={handleBackBtn}
          />
        )}
      </div>
    </main>
  )
}

export default App
