const EducationSummary = ({ data, onEdit }) => {
  console.log(data)
  const { degree, schoolName, city, startDate, endDate, description } = data

  return (
    <div className="summary">
      <div className="summary__header">
        <h2 className="summary__title">Education Details</h2>
        <button className="btn btn--edit" type="button" onClick={onEdit}>
          Edit
        </button>
      </div>
      {degree && (
        <div className="detail">
          <h3>Degree:</h3>
          <p>{degree}</p>
        </div>
      )}
      {schoolName && (
        <div className="detail">
          <h3>School Name:</h3>
          <p>{schoolName}</p>
        </div>
      )}
      {city && (
        <div className="detail">
          <h3>City:</h3>
          <p>{city}</p>
        </div>
      )}

      {startDate && (
        <div className="detail">
          <h3>Start Date:</h3>
          <p>{startDate}</p>
        </div>
      )}
      {endDate && (
        <div className="detail">
          <h3>End Date:</h3>
          <p>{endDate}</p>
        </div>
      )}
      {description && (
        <div className="detail">
          <h3>Description:</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}

export default EducationSummary
