
import '../styles/NavButtons.css'

const NavButtons = ({ onClickPrevious, onClickNext, showSection }) => {
  const isPrevBtnDisabled = showSection.personalDetails; const isNextBtnDisabled = showSection.references

  return (
    <div className="btns btns--nav">
      <button
        className="btn btn--nav"
        onClick={onClickPrevious}
        disabled={isPrevBtnDisabled}
        aria-disabled={isPrevBtnDisabled ? 'true' : 'false'}>
        Previous
        {showSection.education
          ? ': Personal Details'
          : showSection.employment
          ? ': Education'
          : showSection.skills
          ? ': Employment'
          : showSection.languages
          ? ': Skills'
          : showSection.references
          ? ': Languages'
          : null}
      </button>
      <button
        className="btn btn--nav"
        onClick={onClickNext}
        disabled={isNextBtnDisabled}
        aria-disabled={isNextBtnDisabled ? 'true' : 'false'}>
        Next
        {showSection.personalDetails
          ? ': Education'
          : showSection.education
          ? ': Employment'
          : showSection.employment
          ? ': Skills'
          : showSection.skills
          ? ': Languages'
          : showSection.languages
          ? ': References'
          : null}
      </button>
    </div>
  )
}

export default NavButtons
