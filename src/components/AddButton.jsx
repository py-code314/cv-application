import '../styles/AddButton.css'
import addIcon from '../assets/images/icon-add.svg'

/* A button component for adding new entries */
const AddButton = ({ buttonText, setAddForm }) => {
  // Show new empty form on button click
  const handleClick = () => {
    setAddForm(true)
  }
  return (
    <>
      {/* Add button */}
      <button className="btn btn--add" onClick={handleClick}>
        <img src={addIcon} alt="" width={25} height={25} className="add-icon" />
        <span>{buttonText}</span>
      </button>
    </>
  )
}

export default AddButton
