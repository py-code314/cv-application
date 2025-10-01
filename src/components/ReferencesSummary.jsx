import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

const ReferencesSummary = ({ data, setData, setEntryToEdit, handleEntry }) => {
  return data.map((entry) => (
    <div className="summary" key={entry.id} id={entry.id}>
      <div className="summary__header">
        <h2 className="summary__title">References</h2>
        <EditButton
          onEdit={(e) =>
            handleEntry(e, entry.id, data, setData, setEntryToEdit)
          }
        />
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

      <DeleteButton
        onDelete={(e) =>
          handleEntry(e, entry.id, data, setData, setEntryToEdit)
        }
      />
    </div>
  ))
}

export default ReferencesSummary
