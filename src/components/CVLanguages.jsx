/* A component that displays a list of languages */
const CVLanguages = ({ languagesData }) => {
  return (
    <div className="resume__languages section-sidebar">
      {/* Section heading */}
      <h2 className="resume__heading">Languages</h2>
      {/* List of languages */}
      <ul className="languages">
        {languagesData.map((language) => (
          <li key={language.id}>{language.languageName}</li>
        ))}
      </ul>
    </div>
  )
}

export default CVLanguages
