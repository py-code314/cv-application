/* A reusable edit button component */
const EditButton = ({ onEdit }) => {
  return (
    <>
      {/* Edit button */}
      <button
        className="btn btn--edit"
        id="edit-btn"
        type="button"
        onClick={onEdit}>
        Edit
      </button>
    </>
  )
}

export default EditButton
