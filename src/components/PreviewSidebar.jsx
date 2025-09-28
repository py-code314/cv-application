import PreviewIntro from './PreviewIntro'
import PreviewPersonalDetails from './PreviewPersonalDetails'
import PreviewLanguages from './PreviewLanguages'
import PreviewSkills from './PreviewSkills'
import '../styles/PreviewSidebar.css'
const PreviewSidebar = ({
  personalDetailsData,
  employmentData,
  skillsData,
  languagesData,
  showForm,
  showSection,
  showPreview,
}) => {
  // console.log(showForm)
  // console.log(showPreview)
  return (
    <div className="preview__sidebar">
      <PreviewIntro
        personalDetailsData={personalDetailsData}
        employmentData={employmentData}
        showForm={showForm}
        showSection={showSection}
        showPreview={showPreview}
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
