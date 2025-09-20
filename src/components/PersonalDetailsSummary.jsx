import '../styles/PersonalDetailsSummary.css'
import EditButton from './EditButton'

const PersonalDetailsSummary = ({ data, onEdit }) => {
  const { firstName, lastName, email, phoneNumber, address, state, country } =
    data

  return (
    <div className="summary">
      <div className="summary__header">
        <h2 className="summary__title">Personal Details</h2>
        
        <EditButton onClick={onEdit}/>
      </div>
      <div className="detail">
        <h3>First Name:</h3>
        <p>{firstName}</p>
      </div>
      <div className="detail">
        <h3>Last Name:</h3>
        <p>{lastName}</p>
      </div>
      <div className="detail">
        <h3>Email:</h3>
        <p>{email}</p>
      </div>
      {phoneNumber && (
        <div className="detail">
          <h3>Phone Number:</h3>
          <p>{phoneNumber}</p>
        </div>
      )}
      {address && (
        <div className="detail">
          <h3>Address:</h3>
          <p>{address}</p>
        </div>
      )}
      {state && (
        <div className="detail">
          <h3>State:</h3>
          <p>{state}</p>
        </div>
      )}
      {country && (
        <div className="detail">
          <h3>Country:</h3>
          <p>{country}</p>
        </div>
      )}
    </div>
  )
}

export default PersonalDetailsSummary
