import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

const EmploymentSummary = ({ data, onEdit, onDelete, setterFunc }) => {
  const handleEditForm = (id) => {
    data.map((entry) => entry.id === id && onEdit(setterFunc, entry))
  }

  const handleDeleteEntry = (id) => {
    data.map((entry) => entry.id === id && onDelete(entry))
  }
  return data.map((entry) => (
    <div className="summary" key={entry.id} id={entry.id}>
      <div className="summary__header">
        <h2 className="summary__title">Employment Details</h2>
        <EditButton onClick={() => handleEditForm(entry.id)} />
      </div>

      {entry.jobTitle && (
        <div className="detail">
          <h3>Job Title:</h3>
          <p>{entry.jobTitle}</p>
        </div>
      )}
      {entry.employer && (
        <div className="detail">
          <h3>Employer:</h3>
          <p>{entry.employer}</p>
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

      <DeleteButton onClick={() => handleDeleteEntry(entry.id)} />
    </div>
  ))
}

export default EmploymentSummary
