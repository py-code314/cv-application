import '../styles/PreviewEducation.css'
import { formatMonth } from '../scripts/dates'

/* Component that previews education data */
const PreviewEducation = ({ educationData }) => {
  return (
    <div className="preview__education section-content">
      {/* Section heading */}
      <h2 className="preview__heading">Education </h2>
      {educationData.map((education) => (
        <div key={education.id}>
          {/* Subheading */}
          <h3 className="preview__subheading">
            {education.degree && `${education.degree}`}
            {education.schoolName && `, ${education.schoolName}`}
            {education.city && `, ${education.city}`}
          </h3>
          {/* Date range */}
          <p>
            {education.startDate && `${formatMonth(education.startDate)} -`}
            {education.endDate && ` ${formatMonth(education.endDate)}`}
          </p>
          {/* Display description as bullet points */}
          <ul className="preview__list">
            {education.description &&
              education.description
                .split('\n')
                .map((line, index) => <li key={index}>{line}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default PreviewEducation
