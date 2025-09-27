const PreviewProfile = ({ personalDetailsData }) => {
  return (
    <div className="preview__profile">
      {personalDetailsData.aboutMe && (
        <div>
          <h2 className="preview__heading">Profile</h2>
          <p>{personalDetailsData.aboutMe}</p>
        </div>
      )}
    </div>
  )
}

export default PreviewProfile
