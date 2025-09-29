import '../styles/DeleteButton.css'
import { useState } from 'react'
import ModalDialog from './ModalDialog'

const DeleteButton = ({ onClick }) => {
  const [showModal, setShowModal] = useState(false)

  const handleModalDialog = () => {
    setShowModal(true)
    // onClick()
  }
  return (
    <div className="delete-btn-container">
      <button
        className="btn btn--delete"
        type="button"
        onClick={handleModalDialog}>
        Delete
      </button>
      {showModal && <ModalDialog />}
    </div>
  )
}
 
export default DeleteButton;