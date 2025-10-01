import '../styles/CVPreview.css'
import PreviewSidebar from './PreviewSidebar'
import PreviewContent from './PreviewContent'

/* Component that shows a preview of form data */
const CVPreview = ({
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
        showPreview={showPreview}
        personalDetailsData={personalDetailsData}
        employmentData={employmentData}
        languagesData={languagesData}
        skillsData={skillsData}
      />
      <PreviewContent
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
