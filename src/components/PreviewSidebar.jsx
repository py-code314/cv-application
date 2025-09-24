const PreviewSidebar = ({
  personalDetailsData,
  employmentData,
  skillsData,
  languagesData,
  showForm,
  showSection,
}) => {
  // console.log(showForm)
  return (
    <div className="preview__sidebar">
      {showSection.personalDetails && !showForm.personalDetails && (
        <p>{personalDetailsData.firstName}</p>
      )}
     
    </div>
  )
}

export default PreviewSidebar
