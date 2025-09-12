import '../styles/CVBuilder.css'
import CVForm from './CVForm'
import NavButtons from './NavButtons'

const CVBuilder = () => {
  return (
    <div className="cv-build">
      {/* <h2>CV Form</h2> */}
      
      <CVForm />
      <NavButtons />
    </div>
  )
}

export default CVBuilder
