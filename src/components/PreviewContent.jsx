import PreviewProfile from "./PreviewProfile";

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
    </div>
  )
}
 
export default PreviewContent;