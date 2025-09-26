import PreviewProfile from './PreviewProfile'
import PreviewEmployment from './PreviewEmployment'

const PreviewContent = ({
  showForm,
  showPreview,
  personalDetailsData,
  employmentData,
  educationData,
  referencesData,
}) => {
  return (
    <div className="preview__content">
      {showPreview.personalDetails && !showForm.personalDetails && (
        <PreviewProfile personalDetailsData={personalDetailsData} />
      )}
      {showPreview.employment && !showForm.employment && (
        <PreviewEmployment employmentData={employmentData} />
      )}
    </div>
  )
}

export default PreviewContent
