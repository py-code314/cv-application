
import PreviewIntro from "./PreviewIntro"
const PreviewSidebar = ({
  personalDetailsData,
  employmentData,
  skillsData,
  languagesData,
  showForm,
  showSection,
  showPreview
}) => {
  // console.log(showForm)
  return (
    <div className="preview__sidebar">
      <PreviewIntro
        personalDetailsData={personalDetailsData}
        employmentData={employmentData}
        showForm={showForm}
        showSection={showSection}
        showPreview={showPreview}
      />
    </div>
  )
}

export default PreviewSidebar
