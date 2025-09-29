import warningIcon from '../assets/images/icon-warning.svg'
import '../styles/ModalDialog.css'

const ModalDialog = () => {
  return (
    <div className="dialog">
      <img src={warningIcon} alt="" width={25} height={25} />
      <p className="dialog__subheading">Are you sure?</p>
      <p className="dialog__text">
        This will permanently delete the selected entry and all associated data.
        Do you wish to continue?
      </p>
      <div className="btns btns--dialog">
        <button className="btn btn--no">No</button>
        <button className="btn btn--yes">Yes</button>
      </div>
    </div>
  )
}
 
export default ModalDialog;