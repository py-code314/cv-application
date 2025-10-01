import '../styles/CVPreview.css'
import PreviewSidebar from './PreviewSidebar'
import PreviewContent from './PreviewContent'

const CVPreview = ({
  // showSection,
  // showForm,
  showPreview,
  personalDetailsData,
  employmentData,
  educationData,
  languagesData,
  skillsData,

  referencesData,
}) => {
  return (
    <div className="preview">
      <PreviewSidebar
        // showSection={showSection}
        // showForm={showForm}
        showPreview={showPreview}
        personalDetailsData={personalDetailsData}
        employmentData={employmentData}
        languagesData={languagesData}
        skillsData={skillsData}
      />
      <PreviewContent
        // showForm={showForm}
        showPreview={showPreview}
        personalDetailsData={personalDetailsData}
        employmentData={employmentData}
        educationData={educationData}
        referencesData={referencesData}
      />
    </div>
  )
}

export default CVPreview
