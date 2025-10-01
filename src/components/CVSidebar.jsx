import '../styles/CVSidebar.css'
import CVIntro from './CVIntro'
import CVPersonalDetails from './CVPersonalDetails'
import CVLanguages from './CVLanguages'
import CVSkills from './CVSkills'

/* Component that holds the sidebar content */
const CVSidebar = ({
  showPreview,
  personalDetailsData,
  employmentData,
  languagesData,
  skillsData,
}) => {
  return (
    <div className="resume__sidebar">
      <CVIntro
        showPreview={showPreview}
        personalDetailsData={personalDetailsData}
        employmentData={employmentData}
      />
      {showPreview.personalDetails && (
        <CVPersonalDetails personalDetailsData={personalDetailsData} />
      )}
      {/* Add condition 'length > 0', to not display the section heading if section data is empty */}
      {showPreview.languages && languagesData.length > 0 && (
        <CVLanguages languagesData={languagesData} />
      )}
      {showPreview.skills && skillsData.length > 0 && (
        <CVSkills skillsData={skillsData} />
      )}
    </div>
  )
}

export default CVSidebar
