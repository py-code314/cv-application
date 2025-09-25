import '../styles/CVPreview.css'
import PreviewSidebar from './PreviewSidebar'

const CVPreview = ({
  showSection,
  showForm,
  showPreview,
  personalDetailsData,
  educationData,
  employmentData,
  skillsData,
  languagesData,
  referencesData,
}) => {
  return (
    <div className="preview">
      <PreviewSidebar
        showSection={showSection}
        showForm={showForm}
        showPreview={showPreview}
        personalDetailsData={personalDetailsData}
        skillsData={skillsData}
        languagesData={languagesData}
        employmentData={employmentData}
      />
      {/* <PreviewContent
        showForm={showForm}
        personalDetailsData={personalDetailsData}
        employmentData={employmentData}
        educationData={educationData}
        referencesData={referencesData}
      /> */}
    </div>
  )
}

export default CVPreview
