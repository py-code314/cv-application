import addIcon from '../assets/images/icon-add.svg'
import '../styles/AddButton.css'

const AddButton = ({ text, setAddForm }) => {
  const handleAddForm = () => {
    setAddForm(true)
  }
  return (
    <button className="btn btn--add" onClick={handleAddForm}>
      <img src={addIcon} alt="" width={25} height={25} className="add-icon" />
      <span>{text}</span>
    </button>
  )
}

export default AddButton
