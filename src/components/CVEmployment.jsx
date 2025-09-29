
import { formatMonth } from '../scripts/dates'

const CVEmployment = ({ employmentData }) => {
  return (
    <div className="resume__employment section-content">
      <h2 className="resume__heading">Employment History</h2>
      {employmentData.map((employment) => (
        <div key={employment.id}>
          <p className="resume__subheading">
            {employment.jobTitle && `${employment.jobTitle}`}
            {employment.city && `, ${employment.city}`}
          </p>

          <p>
            {employment.startDate && `${formatMonth(employment.startDate)} -`}
            {employment.endDate && ` ${formatMonth(employment.endDate)}`}
          </p>
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
