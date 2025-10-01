import '../styles/CVEducation.css'
import { formatMonth } from '../scripts/dates'

/* Component to display education data in a resume */
const CVEducation = ({ educationData }) => {
  return (
    <div className="resume__education section-content--resume">
      {/* Section heading */}
      <h2 className="resume__heading">Education </h2>
      {educationData.map((education) => (
        <div key={education.id}>
          {/* Subheading */}
          <h3 className="resume__subheading">
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
          <ul className="resume__list">
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

export default CVEducation
