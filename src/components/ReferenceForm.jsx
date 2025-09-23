import FormButtons from './FormButtons'

const ReferenceForm = ({
  referenceDetails,
  setReferenceDetails,
  onSubmit,
  setterFuncEntry,
  setterFuncData,
  data,
}) => {
  const handleFullNameChange = (e) => {
    setReferenceDetails({ ...referenceDetails, fullName: e.target.value })
  }
  const handleCompanyChange = (e) => {
    setReferenceDetails({ ...referenceDetails, company: e.target.value })
  }

  const handleEmailChange = (e) => {
    setReferenceDetails({ ...referenceDetails, email: e.target.value })
  }
  const handlePhoneNumberChange = (e) => {
    setReferenceDetails({ ...referenceDetails, phoneNumber: e.target.value })
  }

  const handleReset = () => {
    setReferenceDetails({
      id: crypto.randomUUID(),
      fullName: '',
      company: '',
      email: '',
      phoneNumber: '',
    })
  }

  const handleReferenceSubmit = (e) => {
    e.preventDefault()
    onSubmit(setterFuncEntry, setterFuncData, referenceDetails, data)
  }

  return (
    <div className="reference-form">
      <form className="form" onSubmit={handleReferenceSubmit}>
        <div className="form__control">
          <label htmlFor="full-name" className="form__label">
            Full Name
          </label>

          <input
            type="text"
            name="full-name"
            id="full-name"
            className="form__input"
            autoComplete="name"
            value={referenceDetails.fullName}
            onChange={handleFullNameChange}
          />
        </div>

        <div className="form__control">
          <label htmlFor="company" className="form__label">
            Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            className="form__input"
            autoComplete="organization"
            value={referenceDetails.company}
            onChange={handleCompanyChange}
          />
        </div>

        <div className="form__control">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <span className="form__hint" id="email-hint">
            Eg. john.doe@example.com
          </span>
          <div className="form__valid">
            <input
              type="email"
              name="email"
              id="email"
              className="form__input"
              autoComplete="email"
              inputMode="email"
              value={referenceDetails.email}
              onChange={handleEmailChange}
            />
          </div>
        </div>

        <div className="form__control">
          <label htmlFor="phone" className="form__label">
            Phone Number
          </label>
          <span className="form__hint" id="phone-hint">
            E.g. 123-456-7890
          </span>
          <div className="form__valid">
            <input
              type="tel"
              name="phone"
              id="phone"
              className="form__input"
              autoComplete="tel"
              inputMode="tel"
              value={referenceDetails.phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
        </div>

        <FormButtons onClick={handleReset} />
      </form>
    </div>
  )
}

export default ReferenceForm
