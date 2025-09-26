import { formatMonth } from '../scripts/dates'

const PreviewEducation = ({ educationData }) => {
  return (
    <div className="preview__education category-preview">
      <h2>Education </h2>
      {educationData.map((education) => (
        <div key={education.id}>
          <p className="preview__subheading">
            {education.degree && `${education.degree}`}
            {education.schoolName && `, ${education.schoolName}`}
            {education.city && `, ${education.city}`}
          </p>

          <p>
            {education.startDate && `${formatMonth(education.startDate)} -`}
            {education.endDate && ` ${formatMonth(education.endDate)}`}
          </p>

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
