import '../styles/PreviewIntro.css'
import personIcon from '../assets/images/icon-person.svg'

/* Component that previews a user's name and current job title */
const PreviewIntro = ({ showPreview, personalDetailsData, employmentData }) => {
  let fullName, currentJob
  if (showPreview.personalDetails) {
    fullName = `${personalDetailsData.firstName} ${personalDetailsData.lastName}`
  }
  if (showPreview.employment && employmentData.length > 0) {
    currentJob = employmentData[0].jobTitle
  }

  return (
    <div className="preview__intro">
      <div className="preview__img-container">
        <img className="preview__img" src={personIcon} alt="" />
      </div>
      <p className="preview__name">{fullName}</p>
      <hr />
      <p className="preview__job">{currentJob}</p>
    </div>
  )
}

export default PreviewIntro
