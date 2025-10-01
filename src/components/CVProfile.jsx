/* Displays a summary of user's profile */
const CVProfile = ({ personalDetailsData }) => {
  return (
    <div className="resume__profile">
      {personalDetailsData.aboutMe && (
        <div>
          {/* Section heading */}
          <h2 className="resume__heading">Profile</h2>
          {/* Profile description */}
          <p>{personalDetailsData.aboutMe}</p>
        </div>
      )}
    </div>
  )
}

export default CVProfile
