const FormButtons = ({ onCancel }) => {
  return (
    <div className="btns btns--form">
      <button
        type="button"
        className="btn btn--cancel"
        id="cancel-btn"
        onClick={onCancel}>
        Cancel
      </button>
      <button type="submit" className="btn btn--submit" id="submit-btn">
        Save
      </button>
    </div>
  )
}

export default FormButtons
