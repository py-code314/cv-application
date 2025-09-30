import warningIcon from '../assets/images/icon-warning.svg'
import '../styles/ModalDialog.css'

const ModalDialog = ({ setShowModal, onClick }) => {
  const handleNoBtnClick = () => {
    setShowModal(false)
  }

  // const handleYesBtnClick = () => {
  //   onClick()
  // }
  return (
    <>
      <div className="backdrop" onClick={handleNoBtnClick}></div>
      <div className="dialog">
        <img src={warningIcon} alt="" width={45} height={45} />
        <p className="dialog__title">Are you sure?</p>
        <p className="dialog__text">
          This will permanently delete the selected entry and all associated
          data. Do you wish to continue?
        </p>
        <div className="btns btns--dialog">
          <button className="btn btn--no" onClick={handleNoBtnClick}>
            No
          </button>
          <button className="btn btn--yes" onClick={onClick}>
            Yes
          </button>
        </div>
      </div>
    </>
  )
}
 
export default ModalDialog;