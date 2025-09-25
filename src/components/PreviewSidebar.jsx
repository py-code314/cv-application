import PreviewIntro from './PreviewIntro'
import PreviewPersonalDetails from './PreviewPersonalDetails'
const PreviewSidebar = ({
  personalDetailsData,
  employmentData,
  skillsData,
  languagesData,
  showForm,
  showSection,
  showPreview,
}) => {
  return (
    <div className="preview__sidebar">
      <PreviewIntro
        personalDetailsData={personalDetailsData}
        employmentData={employmentData}
        showForm={showForm}
        showSection={showSection}
        showPreview={showPreview}
      />
      {showPreview.personalDetails && !showForm.personalDetails && (
        <PreviewPersonalDetails personalDetailsData={personalDetailsData} />
      )}
    </div>
  )
}

export default PreviewSidebar
