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
      {showPreview.languages && (
        <PreviewLanguages languagesData={languagesData} />
      )}
      {showPreview.skills && <PreviewSkills skillsData={skillsData} />}
      {/* {
        showPreview.personalDetails &&
        !showForm.personalDetails && (
          <PreviewPersonalDetails personalDetailsData={personalDetailsData} />
        )}
      {
        showPreview.languages &&
        !showForm.languages && (
          <PreviewLanguages languagesData={languagesData} />
        )}
      {
        showPreview.skills &&
        !showForm.skills && (
          <PreviewSkills skillsData={skillsData} />
        )} */}
    </div>
  )
}

export default PreviewSidebar
