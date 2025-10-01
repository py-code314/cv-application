/* A component that previews a user's profile information */
const PreviewProfile = ({ personalDetailsData }) => {
  return (
    <div className="preview__profile">
      {personalDetailsData.aboutMe && (
        <div>
          {/* Section heading */}
          <h2 className="preview__heading">Profile</h2>
          {/* Profile description */}
          <p>{personalDetailsData.aboutMe}</p>
        </div>
      )}
    </div>
  )
}

export default PreviewProfile
