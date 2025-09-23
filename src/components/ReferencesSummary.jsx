import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

const ReferencesSummary = ({
  data,
  onEdit,
  onDelete,
  setterFuncEntry,
  setterFuncData,
}) => {
  const handleEditForm = (id) => {
    data.map((entry) => entry.id === id && onEdit(setterFuncEntry, entry))
  }

  const handleDeleteEntry = (id) => {
    data.map(
      (entry) => entry.id === id && onDelete(data, setterFuncData, entry)
    )
  }
  return data.map((entry) => (
    <div className="summary" key={entry.id} id={entry.id}>
      <div className="summary__header">
        <h2 className="summary__title">References</h2>
        <EditButton onClick={() => handleEditForm(entry.id)} />
      </div>

      {entry.fullName && (
        <div className="detail">
          <h3>Full Name:</h3>
          <p>{entry.fullName}</p>
        </div>
      )}
      {entry.company && (
        <div className="detail">
          <h3>Company:</h3>
          <p>{entry.company}</p>
        </div>
      )}
      {entry.email && (
        <div className="detail">
          <h3>Email:</h3>
          <p>{entry.email}</p>
        </div>
      )}

      {entry.phoneNumber && (
        <div className="detail">
          <h3>Phone Number:</h3>
          <p>{entry.phoneNumber}</p>
        </div>
      )}
      

      <DeleteButton onClick={() => handleDeleteEntry(entry.id)} />
    </div>
  ))
}

export default ReferencesSummary
