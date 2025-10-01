import '../styles/TitleButton.css'
import collapseIcon from '../assets/images/icon-collapse.svg'
import expandIcon from '../assets/images/icon-expand.svg'

/* A button component that displays a title and an icon to collapse or expand a form */
const TitleButton = ({ isCollapse, onClick, data }) => {
  // Function to handle form display
  const handleFormDisplay = () => {
    onClick(!isCollapse)
  }
  return (
    <>
      {/* Title button */}
      <button className="btn btn--title" onClick={handleFormDisplay}>
        {/* Title text */}
        <span className="entry-title">
          {data.type === 'education'
            ? data.degree && data.schoolName
              ? `${data.degree} at ${data.schoolName}`
              : data.degree
              ? `${data.degree}`
              : 'Title'
            : null}
          {data.type === 'employment'
            ? data.jobTitle && data.employer
              ? `${data.jobTitle} at ${data.employer}`
              : data.jobTitle
              ? `${data.jobTitle}`
              : 'Title'
            : null}
        </span>
        {/* Collapse or expand icon */}
        {!isCollapse ? (
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
    </>
  )
}

export default TitleButton
