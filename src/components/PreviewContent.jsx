import '../styles/PreviewContent.css'
import PreviewProfile from './PreviewProfile'
import PreviewEmployment from './PreviewEmployment'
import PreviewEducation from './PreviewEducation'
import PreviewReferences from './PreviewReferences'

/* Component to hold preview content */
const PreviewContent = ({
  showPreview,
  personalDetailsData,
  employmentData,
  educationData,
  referencesData,
}) => {
  return (
    <div className="preview__content">
      {showPreview.personalDetails && (
        <PreviewProfile personalDetailsData={personalDetailsData} />
      )}
      {/* Add condition 'length > 0', to not display the section heading if section data is empty */}
      {showPreview.employment && employmentData.length > 0 && (
        <PreviewEmployment employmentData={employmentData} />
      )}
      {showPreview.education && educationData.length > 0 && (
        <PreviewEducation educationData={educationData} />
      )}
      {showPreview.references && referencesData.length > 0 && (
        <PreviewReferences referencesData={referencesData} />
      )}
    </div>
  )
}

export default PreviewContent
