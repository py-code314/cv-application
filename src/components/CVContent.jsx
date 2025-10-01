import '../styles/CVContent.css'
import CVProfile from './CVProfile'
import CVEmployment from './CVEmployment'
import CVEducation from './CVEducation'
import CVReferences from './CVReferences'

/* Display resume content based on showPreview and corresponding data */
const CVContent = ({
  showPreview,
  personalDetailsData,
  employmentData,
  educationData,
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
      {showPreview.education && educationData.length > 0 && (
        <CVEducation educationData={educationData} />
      )}
      {showPreview.references && referencesData.length > 0 && (
        <CVReferences referencesData={referencesData} />
      )}
    </div>
  )
}

export default CVContent
