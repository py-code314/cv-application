import './App.css'
import CVBuilder from './components/CVBuilder'
import CVPreview from './components/CVPreview'
import { useState } from 'react'

function App() {
  const [personalDetailsData, setPersonalDetailsData] = useState(null)
  const [educationData, setEducationData] = useState([])
  const [employmentData, setEmploymentData] = useState([])
  const [skillsData, setSkillsData] = useState([])
  const [languagesData, setLanguagesData] = useState([])
  const [referencesData, setReferencesData] = useState([])

  const [showForm, setShowForm] = useState(true)
  return (
    <main className="main">
      <h1 className="title">NextStep</h1>
      <div className="container">
        <CVBuilder
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
        <CVPreview
          personalDetailsData={personalDetailsData}
          showForm={showForm}
        />
      </div>
    </main>
  )
}

export default App
