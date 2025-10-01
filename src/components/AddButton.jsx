import '../styles/AddButton.css'
import addIcon from '../assets/images/icon-add.svg'

const AddButton = ({ buttonText, setAddForm }) => {
  const handleClick = () => {
    setAddForm(true)
  }
  return (
    <button className="btn btn--add" onClick={handleClick}>
      <img src={addIcon} alt="" width={25} height={25} className="add-icon" />
      <span>{buttonText}</span>
    </button>
  )
}

export default AddButton
