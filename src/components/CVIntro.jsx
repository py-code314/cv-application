import '../styles/CVIntro.css'
import personIcon from '../assets/images/icon-person.svg'

/* Component that displays a user's name and current job title */
const CVIntro = ({ showPreview, personalDetailsData, employmentData }) => {
  let fullName, currentJob
  if (showPreview.personalDetails) {
    fullName = `${personalDetailsData.firstName} ${personalDetailsData.lastName}`
  }
  if (showPreview.personalDetails && employmentData.length > 0) {
    currentJob = employmentData[0].jobTitle
  }

  return (
    <div className="resume__intro">
      <div className="resume__img-container">
        <img className="resume__img" src={personIcon} alt="" />
      </div>
      <p className="resume__name">{fullName}</p>
      <hr />
      <p className="resume__job">{currentJob}</p>
    </div>
  )
}

export default CVIntro
