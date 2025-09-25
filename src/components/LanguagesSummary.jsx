import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

const LanguagesSummary = ({
  data,
  onEdit,
  onDelete,
  setterFuncEntry,
  setterFuncData,
}) => {
  const handleEditForm = (id) => {
    data.map(
      (entry) => entry.id === id && onEdit(setterFuncEntry, entry, entry.type)
    )
  }

  const handleDeleteEntry = (id) => {
    data.map(
      (entry) => entry.id === id && onDelete(data, setterFuncData, entry)
    )
  }
  return data.map((entry) => (
    <div className="summary" key={entry.id} id={entry.id}>
      <div className="summary__header">
        <h2 className="summary__title">Languages</h2>
        <EditButton onClick={() => handleEditForm(entry.id)} />
      </div>

      {entry.languageName && (
        <div className="detail">
          <h3>Language:</h3>
          <p>{entry.languageName}</p>
        </div>
      )}

      <DeleteButton onClick={() => handleDeleteEntry(entry.id)} />
    </div>
  ))
}

export default LanguagesSummary
