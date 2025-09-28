import '../styles/DeleteButton.css'

const DeleteButton = ({ onClick }) => {
  return (
    <div className="delete-btn-container">
      <button
        className="btn btn--delete"
        type="button"
        onClick={onClick}>
        Delete
      </button>
    </div>
  )
}
 
export default DeleteButton;