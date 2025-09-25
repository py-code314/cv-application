import spockHand from '../assets/images/icon-spock-hand.svg'
import '../styles/PreviewIntro.css'

const PreviewIntro = ({
  personalDetailsData,
  employmentData,
  showForm,
  showSection,
  showPreview,
}) => {
  // console.log(showForm)
  // console.log(showSection)
  let fullName, currentJob
  if (showPreview.personalDetails & !showForm.personalDetails) {
    fullName = `${personalDetailsData.firstName} ${personalDetailsData.lastName}`
  }
  if (showPreview.employment & !showForm.employment) {
    currentJob = employmentData[0].jobTitle
  }

  return (
    <div className="intro">
      <div className="intro__img-container">
        <img className='intro__img' src={spockHand} alt=""  />
      </div>
      <p className='intro__name'>{fullName}</p>
      <hr />
      <p className='intro__job'>{currentJob}</p>
    </div>
  )
}

export default PreviewIntro
