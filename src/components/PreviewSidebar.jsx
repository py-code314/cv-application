import '../styles/PreviewSidebar.css'
import PreviewIntro from './PreviewIntro'
import PreviewPersonalDetails from './PreviewPersonalDetails'
import PreviewLanguages from './PreviewLanguages'
import PreviewSkills from './PreviewSkills'

/* Component to hold sidebar content */
const PreviewSidebar = ({
  showPreview,
  personalDetailsData,
  employmentData,
  languagesData,
  skillsData,
}) => {
  return (
    <div className="preview__sidebar">
      <PreviewIntro
        showPreview={showPreview}
        personalDetailsData={personalDetailsData}
        employmentData={employmentData}
      />
      {showPreview.personalDetails && (
        <PreviewPersonalDetails personalDetailsData={personalDetailsData} />
      )}
      {/* Add condition 'length > 0', to not display the section heading if section data is empty */}
      {showPreview.languages && languagesData.length > 0 && (
        <PreviewLanguages languagesData={languagesData} />
      )}
      {showPreview.skills && skillsData.length > 0 && (
        <PreviewSkills skillsData={skillsData} />
      )}
    </div>
  )
}

export default PreviewSidebar
