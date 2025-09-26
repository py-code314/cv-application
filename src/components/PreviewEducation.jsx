import { formatMonth } from '../scripts/dates'

const PreviewEducation = ({ educationData }) => {
  return (
    <div className="preview__education category-preview">
      <h2>Education </h2>
      {educationData.map((education) => (
        <div key={education.id}>
          <p className="preview__subheading">{`${education.degree}, ${education.schoolName}, ${education.city}`}</p>
          <p>{`${formatMonth(education.startDate)} - ${formatMonth(education.endDate)}`}</p>
          <ul className="preview__list">
            {education.description.split('\n').map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default PreviewEducation
