import '../styles/PreviewPersonalDetails.css'

const PreviewPersonalDetails = ({ personalDetailsData }) => {
  const fullName = `${personalDetailsData.firstName} ${personalDetailsData.lastName}`
  const email = personalDetailsData.email
  const phoneNumber = personalDetailsData.phoneNumber
  const address = personalDetailsData.address
  const addressArray = address.split('\n')

  const state = personalDetailsData.state
  const country = personalDetailsData.country

  return <div className="preview__personal-info">
    <h2 className="preview__heading">Personal Details</h2>
    <address>
      <p>{fullName}</p>
      {addressArray.map((line, index) => <p key={index}>{line}</p>)}
      <p>{state}</p>
      <p>{country}</p>
      <p>{phoneNumber}</p>
      <p>{email}</p>
    </address>

  </div>
}

export default PreviewPersonalDetails
