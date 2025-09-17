import collapseIcon from '../assets/images/icon-collapse.svg'
import '../styles/TitleButton.css'
const TitleButton = ({ educationDetails }) => {
  return (
    <button className="btn btn--title">
      <span className="entry-title">
        {(educationDetails.degree || educationDetails.schoolName) &&
          `${educationDetails.degree} at ${educationDetails.schoolName}`}
      </span>
      <img
        src={collapseIcon}
        alt="Collapse"
        width={25}
        height={25}
        className="collapse-icon"
      />
    </button>
  )
}

export default TitleButton
