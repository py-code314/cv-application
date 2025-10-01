const EditButton = ({ onEdit }) => {
  return (
    <button className="btn btn--edit" id="edit-btn" type="button" onClick={onEdit}>
      Edit
    </button>
  )
}
 
export default EditButton;