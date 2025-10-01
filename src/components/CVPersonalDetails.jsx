import '../styles/CVPersonalDetails.css'

/* Displays the personal details of a user in a CV */
const CVPersonalDetails = ({ personalDetailsData }) => {
  const fullName = `${personalDetailsData.firstName} ${personalDetailsData.lastName}`
  const email = personalDetailsData.email
  const phoneNumber = personalDetailsData.phoneNumber
  const address = personalDetailsData.address
  const addressArray = address.split('\n')
  const state = personalDetailsData.state
  const country = personalDetailsData.country

  return (
    <div className="resume__personal-info section-sidebar">
      {/* Section heading */}
      <h2 className="resume__heading">Personal Details</h2>
      {/* Address */}
      <address>
        <p>{fullName}</p>
        {addressArray.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <p>{state}</p>
        <p>{country}</p>
        <p>{phoneNumber}</p>
        <p>{email}</p>
      </address>
    </div>
  )
}

export default CVPersonalDetails
