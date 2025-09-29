const CVProfile = ({ personalDetailsData }) => {
  return (
    <div className="resume__profile">
      {personalDetailsData.aboutMe && (
        <div>
          <h2 className="resume__heading">Profile</h2>
          <p>{personalDetailsData.aboutMe}</p>
        </div>
      )}
    </div>
  )
}

export default CVProfile
