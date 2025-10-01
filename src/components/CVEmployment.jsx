import { formatMonth } from '../scripts/dates'

/* Component to display employment data in a resume */
const CVEmployment = ({ employmentData }) => {
  return (
    <div className="resume__employment section-content--resume">
      {/* Section heading */}
      <h2 className="resume__heading">Employment History</h2>
      {employmentData.map((employment) => (
        <div key={employment.id}>
          {/* Subheading */}
          <h3 className="resume__subheading">
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
          <ul className="resume__list">
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

export default CVEmployment
