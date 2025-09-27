const PreviewLanguages = ({ languagesData }) => {
  // console.log(languagesData)
  return (
    <div className="preview__languages section-preview">
      <h2 className="preview__heading">Languages</h2>
      <ul className="languages">
        {languagesData.map((language) => (
          <li key={language.id}>{language.languageName}</li>
        ))}
      </ul>
    </div>
  )
  
}
 
export default PreviewLanguages;