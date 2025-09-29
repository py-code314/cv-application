import CVProfile from "./CVProfile";

const CVContent = ({
  showPreview,
  personalDetailsData,
  educationData,
  employmentData,
  referencesData,
}) => {
  return (
    <div className="resume__content">
      {showPreview.personalDetails && (
        <CVProfile personalDetailsData={personalDetailsData} />
      )}
      {/* Add condition 'length > 0', to not display the section heading if section data is empty */}
      {showPreview.employment && employmentData.length > 0 && (
        <CVEmployment employmentData={employmentData} />
      )}
    </div>
  )
}
 
export default CVContent;