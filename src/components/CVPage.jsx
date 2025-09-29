import '../styles/CVPage.css'
import backArrow from '../assets/images/icon-back.svg'
import CVSidebar from './CVSidebar'
import CVContent from './CVContent'

const CVPage = ({
  showSection,
  showForm,
  showPreview,
  personalDetailsData,
  educationData,
  employmentData,
  skillsData,
  languagesData,
  referencesData,
  handleBackBtn,
}) => {
  return (
    <div className="cv-page">
      <button className="btn btn--back" onClick={handleBackBtn}>
        <img src={backArrow} alt="" width={20} height={20} />
        Back to Resume Builder
      </button>
      <div className="resume">
        <CVSidebar
          showSection={showSection}
          showForm={showForm}
          showPreview={showPreview}
          personalDetailsData={personalDetailsData}
          skillsData={skillsData}
          languagesData={languagesData}
          employmentData={employmentData}
        />
        <CVContent
          showForm={showForm}
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
