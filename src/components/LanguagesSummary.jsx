import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

/* A component that displays a list of languages */
const LanguagesSummary = ({ data, setData, setEntryToEdit, handleEntry }) => {
  return data.map((entry) => (
    <div className="summary" key={entry.id} id={entry.id}>
      <div className="summary__header">
        {/* Section heading */}
        <h2 className="summary__title">Languages</h2>
        <EditButton
          onEdit={(e) =>
            handleEntry(e, entry.id, data, setData, setEntryToEdit)
          }
        />
      </div>

      {/* Display language */}
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
