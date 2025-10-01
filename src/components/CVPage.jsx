import '../styles/CVPage.css'
import backArrow from '../assets/images/icon-back.svg'
import CVSidebar from './CVSidebar'
import CVContent from './CVContent'


/* CVPage is a component that displays a user's resume */
const CVPage = ({
  showPreview,
  personalDetailsData,
  employmentData,
  educationData,
  languagesData,
  skillsData,
  referencesData,
  handleBackBtn,
}) => {
  return (
    <div className="cv-page">
      {/* Back button */}
      <button className="btn btn--back" onClick={handleBackBtn}>
        <img src={backArrow} alt="" width={20} height={20} />
        Back to CV Builder
      </button>
      <div className="resume">
        <CVSidebar
          showPreview={showPreview}
          personalDetailsData={personalDetailsData}
          languagesData={languagesData}
          skillsData={skillsData}
          employmentData={employmentData}
        />
        <CVContent
          showPreview={showPreview}
          personalDetailsData={personalDetailsData}
          employmentData={employmentData}
          educationData={educationData}
          referencesData={referencesData}
        />
      </div>
    </div>
  )
}

export default CVPage
