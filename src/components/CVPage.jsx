import '../styles/CVPage.css'
import backArrow from '../assets/images/icon-back.svg'

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
  handleBackBtn
}) => {
  return (
    <div className="cv-page">
      <button className="btn btn--back" onClick={handleBackBtn}>
        <img src={backArrow} alt="" width={20} height={20} />
        Back to Resume Builder</button>
      <div className="resume"></div>
    </div>

  );
}
 
export default CVPage;