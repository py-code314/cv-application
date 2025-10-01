import { formatMonth } from '../scripts/dates'

/* Component to display employment data preview  */
const PreviewEmployment = ({ employmentData }) => {
  return (
    <div className="preview__employment section-content">
      {/* Section heading */}
      <h2 className="preview__heading">Employment History</h2>
      {employmentData.map((employment) => (
        <div key={employment.id}>
          {/* Subheading */}
          <h3 className="preview__subheading">
            {employment.jobTitle && `${employment.jobTitle}`}
            {employment.employer && `, ${employment.employer}`}
            {employment.city && `, ${employment.city}`}
          </h3>
          {/* Date range */}
          <p>
            {employment.startDate && `${formatMonth(employment.startDate)} -`}
            {employment.endDate && ` ${formatMonth(employment.endDate)}`}
          </p>

          {/* Display description as bullet points */}
          <ul className="preview__list">
            {employment.description &&
              employment.description
                .split('\n')
                .map((line, index) => <li key={index}>{line}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default PreviewEmployment
