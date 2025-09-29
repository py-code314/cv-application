import { formatMonth } from '../scripts/dates'
import '../styles/CVEducation.css'

const CVEducation = ({ educationData }) => {
  return (
    <div className="resume__education section-content--resume">
      <h2 className="resume__heading">Education </h2>
      {educationData.map((education) => (
        <div key={education.id}>
          <p className="resume__subheading">
            {education.degree && `${education.degree}`}
            {education.schoolName && `, ${education.schoolName}`}
            {education.city && `, ${education.city}`}
          </p>

          <p>
            {education.startDate && `${formatMonth(education.startDate)} -`}
            {education.endDate && ` ${formatMonth(education.endDate)}`}
          </p>

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
