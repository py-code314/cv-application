/* Component to render Cancel and Save buttons */
const FormButtons = ({ onCancel }) => {
  return (
    <div className="btns btns--form">
      {/* Cancel button */}
      <button
        type="button"
        className="btn btn--cancel"
        id="cancel-btn"
        onClick={onCancel}>
        Cancel
      </button>

      {/* Save button */}
      <button type="submit" className="btn btn--submit" id="submit-btn">
        Save
      </button>
    </div>
  )
}

export default FormButtons
