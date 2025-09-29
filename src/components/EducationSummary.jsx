
import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

const EducationSummary = ({
  data,
  onEdit,
  onDelete,
  setEntryToEdit,
  setData,
  // setShowModal
}) => {
  const handleEditForm = (id) => {
    data.map(
      (entry) => entry.id === id && onEdit(setEntryToEdit, entry, entry.type)
    )
  }

  const handleDeleteEntry = (id) => {
    // setShowModal(true)
    // console.log(data)
    data.map(
      (entry) => entry.id === id && onDelete(data, setData, entry)
    )
  }
  return data.map((entry) => (
    <div className="summary" key={entry.id} id={entry.id}>
      <div className="summary__header">
        <h2 className="summary__title">Education Details</h2>
        <EditButton onClick={() => handleEditForm(entry.id)} />
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
          <ul>
            {entry.description.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </ul>
        </div>
      )}

      <DeleteButton onClick={() => handleDeleteEntry(entry.id)} />
    </div>
  ))
}

export default EducationSummary
