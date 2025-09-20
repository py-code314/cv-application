import '../styles/EducationSummary.css'

const EducationSummary = ({ data, onEdit, onDelete }) => {
  const handleEditForm = (id) => {
    data.map((entry) => entry.id === id && onEdit(entry))
  }

  const handleDeleteEntry = (id) => {
    console.log(id)
    data.map((entry) => entry.id === id && onDelete(entry))
  }
  return data.map((entry) => (
    <div className="summary" key={entry.id} id={entry.id}>
      <div className="summary__header">
        <h2 className="summary__title">Education Details</h2>
        <button
          className="btn btn--edit"
          type="button"
          onClick={() => handleEditForm(entry.id)}>
          Edit
        </button>
      </div>

      {entry.degree && (
        <div className="detail">
          <h3>Degree:</h3>
          <p>{entry.degree}</p>
        </div>
      )}
      {entry.schoolName && (
        <div className="detail">
          <h3>School Name:</h3>
          <p>{entry.schoolName}</p>
        </div>
      )}
      {entry.city && (
        <div className="detail">
          <h3>City:</h3>
          <p>{entry.city}</p>
        </div>
      )}

      {entry.startDate && (
        <div className="detail">
          <h3>Start Date:</h3>
          <p>{entry.startDate}</p>
        </div>
      )}
      {entry.endDate && (
        <div className="detail">
          <h3>End Date:</h3>
          <p>{entry.endDate}</p>
        </div>
      )}
      {entry.description && (
        <div className="detail">
          <h3>Description:</h3>
          <p>{entry.description}</p>
        </div>
      )}

      <div className="btn-container">
        <button
          className="btn btn--delete"
          type="button"
          onClick={() => handleDeleteEntry(entry.id)}>
          Delete
        </button>
      </div>
    </div>
  ))
}

export default EducationSummary
