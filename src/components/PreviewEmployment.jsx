import '../styles/PreviewEmployment.css'
import { formatMonth } from '../scripts/dates'

const PreviewEmployment = ({ employmentData }) => {
  return (
    <div className="preview__employment category-preview">
      <h2>Employment History</h2>
      {employmentData.map((employment) => (
        <div key={employment.id}>
          <p className="preview__subheading">{`${employment.jobTitle}, ${employment.employer}, ${employment.city}`}</p>
          <p>{`${formatMonth(employment.startDate)} - ${formatMonth(
            employment.endDate
          )}`}</p>
          <ul className="preview__list">
            {employment.description.split('\n').map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default PreviewEmployment
