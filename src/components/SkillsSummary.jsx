import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

/* A component that displays a list of skills */
const SkillsSummary = ({ data, setData, setEntryToEdit, handleEntry }) => {
  return data.map((entry) => (
    <div className="summary" key={entry.id} id={entry.id}>
      <div className="summary__header">
        {/* Section heading */}
        <h2 className="summary__title">Skills</h2>
        <EditButton
          onEdit={(e) =>
            handleEntry(e, entry.id, data, setData, setEntryToEdit)
          }
        />
      </div>
      {/* Display skill */}
      {entry.skillName && (
        <div className="detail">
          <h3>Skill:</h3>
          <p>{entry.skillName}</p>
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

export default SkillsSummary
