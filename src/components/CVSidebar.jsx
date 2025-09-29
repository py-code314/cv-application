import CVIntro from "./CVIntro";
import '../styles/CVSidebar.css'

const CVSidebar = ({
  personalDetailsData,
  employmentData,
  skillsData,
  languagesData,
  showPreview
}) => {
  return (
    <div className="resume__sidebar">
      <CVIntro
        personalDetailsData={personalDetailsData}
        employmentData={employmentData}
        // showForm={showForm}
        // showSection={showSection}
        showPreview={showPreview}
      />
      
    </div>
  )
}
 
export default CVSidebar;