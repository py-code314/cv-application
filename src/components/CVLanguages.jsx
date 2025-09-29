const CVLanguages = ({ languagesData }) => {

  return (
    <div className="resume__languages section-sidebar">
      <h2 className="resume__heading">Languages</h2>
      <ul className="languages">
        {languagesData.map((language) => (
          <li key={language.id}>{language.languageName}</li>
        ))}
      </ul>
    </div>
  )
}

export default CVLanguages
