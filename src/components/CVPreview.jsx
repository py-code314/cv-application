import '../styles/CVPreview.css'

const CVPreview = ({ showForm, personalDetailsData }) => {
  console.log(showForm)
  return (
    <div className="preview">
      <div className="preview__sidebar">
        {!showForm && <p>{personalDetailsData.firstName}</p>}
        
      </div>
      <div className="preview__content"></div>
    </div>
  )
}
 
export default CVPreview;