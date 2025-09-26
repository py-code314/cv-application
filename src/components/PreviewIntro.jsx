import spockHand from '../assets/images/icon-spock-hand.svg'
import '../styles/PreviewIntro.css'

const PreviewIntro = ({
  personalDetailsData,
  employmentData,
  // showForm,
  // showSection,
  showPreview,
}) => {
  let fullName, currentJob
  if (showPreview.personalDetails) {
    fullName = `${personalDetailsData.firstName} ${personalDetailsData.lastName}`
  }
  if (showPreview.employment) {
    currentJob = employmentData[0].jobTitle
  }
  // if (showPreview.personalDetails && !showForm.personalDetails) {
  //   fullName = `${personalDetailsData.firstName} ${personalDetailsData.lastName}`
  // }
  // if (showPreview.employment && !showForm.employment) {
  //   currentJob = employmentData[0].jobTitle
  // }

  return (
    <div className="preview__intro">
      <div className="preview__img-container">
        <img className="preview__img" src={spockHand} alt="" />
      </div>
      <p className="preview__name">{fullName}</p>
      <hr />
      <p className="preview__job">{currentJob}</p>
    </div>
  )
}

export default PreviewIntro
