import CVIntro from "./CVIntro";
import CVPersonalDetails from './CVPersonalDetails'
import CVLanguages from "./CVLanguages";
import CVSkills from './CVSkills'
import '../styles/CVSidebar.css'

const CVSidebar = ({
  personalDetailsData,
  employmentData,
  skillsData,
  languagesData,
  showPreview
}) => {
  return (
    <div className="resume__sidebar">
      <CVIntro
        personalDetailsData={personalDetailsData}
        employmentData={employmentData}
        // showForm={showForm}
        // showSection={showSection}
        showPreview={showPreview}
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
 
export default CVSidebar;