import '../styles/NavButtons.css'

/* NavButtons component with Previous and Next buttons */
const NavButtons = ({ showSection, onClickNext, onClickPrevious }) => {
  return (
    <div className="btns btns--nav">
      {/* Previous button */}
      {!showSection.personalDetails && (
        <button className="btn btn--nav btn--prev" onClick={onClickPrevious}>
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
      )}

      {/* Next button */}
      <button className="btn btn--nav btn--next" onClick={onClickNext}>
        {showSection.personalDetails
          ? 'Next: Education'
          : showSection.education
          ? 'Next: Employment'
          : showSection.employment
          ? 'Next: Skills'
          : showSection.skills
          ? 'Next: Languages'
          : showSection.languages
          ? 'Next: References'
          : showSection.references
          ? 'Done'
          : null}
      </button>
    </div>
  )
}

export default NavButtons
