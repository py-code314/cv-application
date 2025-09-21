import collapseIcon from '../assets/images/icon-collapse.svg'
import expandIcon from '../assets/images/icon-expand.svg'
import '../styles/TitleButton.css'

const TitleButton = ({
  educationDetails,
  employmentDetails,
  onClick,
  collapse,
}) => {
  const handleHideForm = () => {
    onClick(!collapse)
  }
  return (
    <button className="btn btn--title" onClick={handleHideForm}>
      <span className="entry-title">
        {educationDetails
          ? educationDetails.degree && educationDetails.schoolName
            ? `${educationDetails.degree} at ${educationDetails.schoolName}`
            : educationDetails.degree
            ? `${educationDetails.degree}`
            : 'Title'
          : null}
        {employmentDetails
          ? employmentDetails.jobTitle && employmentDetails.employer
            ? `${employmentDetails.jobTitle} at ${employmentDetails.employer}`
            : employmentDetails.jobTitle
            ? `${employmentDetails.jobTitle}`
            : 'Title'
          : null}
      </span>
      {!collapse ? (
        <img
          src={collapseIcon}
          alt="Collapse"
          width={30}
          height={30}
          className="collapse-icon"
        />
      ) : (
        <img
          src={expandIcon}
          alt="Expand"
          width={30}
          height={30}
          className="expand-icon"
        />
      )}
    </button>
  )
}

export default TitleButton
