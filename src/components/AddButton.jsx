import addIcon from '../assets/images/icon-add.svg'
import '../styles/AddButton.css'

const AddButton = ({ text, setAddClick }) => {
  const handleClick = () => {
    setAddClick(true)
  }
  return (
    <button className="btn btn--add" onClick={handleClick}>
      <img src={addIcon} alt="" width={25} height={25} className="add-icon" />
      <span>{text}</span>
    </button>
  )
}

export default AddButton
