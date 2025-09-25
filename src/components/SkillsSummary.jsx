import DeleteButton from './DeleteButton'
import EditButton from './EditButton'

const SkillsSummary = ({
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
        <h2 className="summary__title">Skills</h2>
        <EditButton onClick={() => handleEditForm(entry.id)} />
      </div>

      {entry.skillName && (
        <div className="detail">
          <h3>Skill:</h3>
          <p>{entry.skillName}</p>
        </div>
      )}
      

      <DeleteButton onClick={() => handleDeleteEntry(entry.id)} />
    </div>
  ))
}

export default SkillsSummary
