import { useState } from 'react'
import '../styles/DeleteButton.css'
import ModalDialog from './ModalDialog'

const DeleteButton = ({ onDelete }) => {
  const [showModal, setShowModal] = useState(false)

  const handleModalDialog = () => {
    setShowModal(true)
  }
  return (
    <div className="delete-btn-container">
      <button
        className="btn btn--delete"
        
        type="button"
        onClick={handleModalDialog}>
        Delete
      </button>
      {showModal && (
        <ModalDialog setShowModal={setShowModal} onDelete={onDelete} />
      )}
    </div>
  )
}

export default DeleteButton
