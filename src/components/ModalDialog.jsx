import '../styles/ModalDialog.css'
import warningIcon from '../assets/images/icon-warning.svg'

const ModalDialog = ({ setShowModal, onDelete }) => {
  const handleCancelDelete = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className="backdrop" onClick={handleCancelDelete}></div>
      <div className="dialog">
        <img src={warningIcon} alt="" width={45} height={45} />
        <p className="dialog__title">Are you sure?</p>
        <p className="dialog__text">
          This will permanently delete the selected entry and all associated
          data. Do you wish to continue?
        </p>
        <div className="btns btns--dialog">
          <button className="btn btn--no" onClick={handleCancelDelete}>
            No
          </button>
          <button className="btn btn--yes" id="delete-btn" onClick={onDelete}>
            Yes
          </button>
        </div>
      </div>
    </>
  )
}

export default ModalDialog
