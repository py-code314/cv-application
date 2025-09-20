const DeleteButton = ({ onClick}) => {
  return (
    <div className="btn-container">
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