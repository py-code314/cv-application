import PreviewProfile from './PreviewProfile'
import PreviewEmployment from './PreviewEmployment'
import PreviewEducation from './PreviewEducation'
import PreviewReferences from './PreviewReferences'

const PreviewContent = ({
  // showForm,
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
      {showPreview.employment && (
        <PreviewEmployment employmentData={employmentData} />
      )}
      {showPreview.education && (
        <PreviewEducation educationData={educationData} />
      )}
      {showPreview.references && (
        <PreviewReferences referencesData={referencesData} />
      )}
      {/* {showPreview.personalDetails && !showForm.personalDetails && (
        <PreviewProfile personalDetailsData={personalDetailsData} />
      )}
      {showPreview.employment && !showForm.employment && (
        <PreviewEmployment employmentData={employmentData} />
      )}
      {showPreview.education && !showForm.education && (
        <PreviewEducation educationData={educationData} />
      )}
      {showPreview.references && !showForm.references && (
        <PreviewReferences referencesData={referencesData} />
      )} */}
    </div>
  )
}

export default PreviewContent
