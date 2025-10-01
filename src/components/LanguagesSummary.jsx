import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

const LanguagesSummary = ({ data, setData, setEntryToEdit, handleEntry }) => {
  return data.map((entry) => (
    <div className="summary" key={entry.id} id={entry.id}>
      <div className="summary__header">
        <h2 className="summary__title">Languages</h2>
        <EditButton
          onEdit={(e) =>
            handleEntry(e, entry.id, data, setData, setEntryToEdit)
          }
        />
      </div>

      {entry.languageName && (
        <div className="detail">
          <h3>Language:</h3>
          <p>{entry.languageName}</p>
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

export default LanguagesSummary
