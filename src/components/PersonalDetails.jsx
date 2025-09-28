import '../styles/PersonalDetails.css'
import { useState } from 'react'
import checkMarkIcon from '../assets/images/icon-check.svg'
import errorIcon from '../assets/images/icon-error.svg'
import FormButtons from './FormButtons'

const PersonalDetails = ({ onSubmit, personalEntry }) => {
  const [personalInfo, setPersonalInfo] = useState(
    personalEntry || {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      state: '',
      country: '',
      aboutMe: '',
    }
  )

  // Assign dynamic values to properties to update state correctly
  const [inputStatus, setInputStatus] = useState({
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    email: personalInfo.email,
    phoneNumber: personalInfo.phoneNumber,
  })

  const [inputBlurred, setInputBlurred] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
  })

  const [emailErrorMessage, setEmailErrorMessage] = useState(
    'Please enter your email address'
  )

  const [formSubmission, setFormSubmission] = useState(false)

  const handleFirstNameChange = (e) => {
    setPersonalInfo({ ...personalInfo, firstName: e.target.value })
  }

  const handleLastNameChange = (e) => {
    setPersonalInfo({ ...personalInfo, lastName: e.target.value })
  }

  const handleEmailChange = (e) => {
    setPersonalInfo({ ...personalInfo, email: e.target.value })
  }
  const handlePhoneNumberChange = (e) => {
    setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })
  }
  const handleAddressChange = (e) => {
    setPersonalInfo({ ...personalInfo, address: e.target.value })
  }
  const handleStateChange = (e) => {
    setPersonalInfo({ ...personalInfo, state: e.target.value })
  }
  const handleCountryChange = (e) => {
    setPersonalInfo({ ...personalInfo, country: e.target.value })
  }
  const handleAboutMeChange = (e) => {
    setPersonalInfo({ ...personalInfo, aboutMe: e.target.value })
  }

  const handleReset = () => {
    setPersonalInfo({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      state: '',
      country: '',
      aboutMe: '',
    })
    setInputStatus({
      ...inputStatus,
      firstName: personalInfo.firstName,
      lastName: personalInfo.lastName,
      email: personalInfo.email,
      phoneNumber: personalInfo.phoneNumber,
    })
    setInputBlurred({
      ...inputBlurred,
      firstName: false,
      lastName: false,
      email: false,
      phoneNumber: false,
    })
  }

  const handleFirstNameValidation = () => {
    setInputBlurred({ ...inputBlurred, firstName: true })
    if (personalInfo.firstName) {
      setInputStatus({ ...inputStatus, firstName: true })
    } else {
      setInputStatus({ ...inputStatus, firstName: false })
    }
  }
  const handleLastNameValidation = () => {
    setInputBlurred({ ...inputBlurred, lastName: true })
    if (personalInfo.lastName) {
      setInputStatus({ ...inputStatus, lastName: true })
    } else {
      setInputStatus({ ...inputStatus, lastName: false })
    }
  }

  const handleEmailValidation = () => {
    const emailRegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    setInputBlurred({ ...inputBlurred, email: true })
    if (!personalInfo.email) {
      setEmailErrorMessage('Please enter your email address')
      setInputStatus({ ...inputStatus, email: false })
    } else if (!emailRegExp.test(personalInfo.email)) {
      setEmailErrorMessage('Please enter a valid email address')
      setInputStatus({ ...inputStatus, email: false })
    } else {
      setInputStatus({ ...inputStatus, email: true })
    }
  }

  const handlePhoneNumberValidation = () => {
    const phoneNumberRegExp = /^(\d{10}|\d{3}[-\s.]\d{3}[-\s.]\d{4})$/
    const isEmpty = !personalInfo.phoneNumber
    const isValid =
      personalInfo.phoneNumber &&
      phoneNumberRegExp.test(personalInfo.phoneNumber)
    const isInvalid =
      personalInfo.phoneNumber &&
      !phoneNumberRegExp.test(personalInfo.phoneNumber)

    if (isEmpty) {
      setInputStatus({ ...inputStatus, phoneNumber: true })
    } else if (isValid) {
      setInputStatus({ ...inputStatus, phoneNumber: true })
      setInputBlurred({ ...inputBlurred, phoneNumber: true })
    } else if (isInvalid) {
      setInputStatus({ ...inputStatus, phoneNumber: false })
      setInputBlurred({ ...inputBlurred, phoneNumber: true })
    }
  }

  const handleFormValidation = (e) => {
    e.preventDefault()
    setFormSubmission(true)
    if (inputStatus.firstName && inputStatus.lastName && inputStatus.email) {
      onSubmit(personalInfo)
    }
  }

  return (
    <div className="personal-info">
      <h2 className="personal-info__heading">Personal Details</h2>
      <p className="personal-info__text">
        Research suggests that users who add phone number and email receive more
        positive feedback from recruiters.
      </p>
      <form
        className="form personal-info__form form--submit"
        noValidate
        onSubmit={handleFormValidation}>
        <div className="form__control">
          <label htmlFor="first-name" className="form__label">
            First Name (required)
          </label>
          <div className="form__valid">
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="form__input"
              autoComplete="given-name"
              required
              value={personalInfo.firstName}
              onChange={handleFirstNameChange}
              onBlur={handleFirstNameValidation}
            />
            {inputStatus.firstName &&
              (inputBlurred.firstName || formSubmission) && (
                <img
                  className="form__checkmark"
                  aria-hidden="true"
                  src={checkMarkIcon}
                  alt=""
                  width={30}
                  height={30}
                />
              )}
          </div>
          {!inputStatus.firstName &&
            (inputBlurred.firstName || formSubmission) && (
              <div className="form__error">
                <img
                  className="form__error-icon"
                  aria-hidden="true"
                  src={errorIcon}
                  alt=""
                  width={30}
                  height={30}
                />
                <p className="form__error-message" aria-live="polite">
                  Please enter your first name
                </p>
              </div>
            )}
        </div>
        <div className="form__control">
          <label htmlFor="last-name" className="form__label">
            Last Name (required)
          </label>
          <div className="form__valid">
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="form__input"
              autoComplete="family-name"
              required
              value={personalInfo.lastName}
              onChange={handleLastNameChange}
              onBlur={handleLastNameValidation}
            />
            {inputStatus.lastName &&
              (inputBlurred.lastName || formSubmission) && (
                <img
                  className="form__checkmark"
                  aria-hidden="true"
                  src={checkMarkIcon}
                  alt=""
                  width={25}
                  height={25}
                />
              )}
          </div>
          {!inputStatus.lastName &&
            (inputBlurred.lastName || formSubmission) && (
              <div className="form__error">
                <img
                  className="form__error-icon"
                  aria-hidden="true"
                  src={errorIcon}
                  alt=""
                  width={25}
                  height={25}
                />
                <p className="form__error-message" aria-live="polite">
                  Please enter your last name
                </p>
              </div>
            )}
        </div>
        <div className="form__control">
          <label htmlFor="email" className="form__label">
            Email (required)
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
              aria-describedby="email-hint invalid-email"
              autoComplete="email"
              inputMode="email"
              required
              value={personalInfo.email}
              onChange={handleEmailChange}
              onBlur={handleEmailValidation}
            />
            {inputStatus.email && (inputBlurred.email || formSubmission) && (
              <img
                className="form__checkmark"
                aria-hidden="true"
                src={checkMarkIcon}
                alt=""
                width={25}
                height={25}
              />
            )}
          </div>
          {!inputStatus.email && (inputBlurred.email || formSubmission) && (
            <div className="form__error">
              <img
                className="form__error-icon"
                aria-hidden="true"
                src={errorIcon}
                alt=""
                width={25}
                height={25}
              />
              <p className="form__error-message" aria-live="polite">
                {emailErrorMessage}
              </p>
            </div>
          )}
        </div>
        <div className="form__control">
          <label htmlFor="phone" className="form__label">
            Phone Number
          </label>
          <span className="form__hint" id="phone-hint">
            Allowed formats: 1234567890 or 123-456-7890 or 123 456 7890 or
            123.456.7890
          </span>
          <div className="form__valid">
            <input
              type="tel"
              name="phone"
              id="phone"
              className="form__input"
              aria-describedby="phone-hint invalid-phone"
              autoComplete="tel"
              inputMode="tel"
              value={personalInfo.phoneNumber}
              onChange={handlePhoneNumberChange}
              onBlur={handlePhoneNumberValidation}
            />
            {inputStatus.phoneNumber && inputBlurred.phoneNumber && (
              <img
                className="form__checkmark"
                aria-hidden="true"
                src={checkMarkIcon}
                alt=""
                width={25}
                height={25}
              />
            )}
          </div>
          {!inputStatus.phoneNumber && inputBlurred.phoneNumber && (
            <div className="form__error">
              <img
                className="form__error-icon"
                aria-hidden="true"
                src={errorIcon}
                alt=""
                width={25}
                height={25}
              />
              <p className="form__error-message" aria-live="polite">
                Enter your phone number in one of the example formats
              </p>
            </div>
          )}
        </div>
        <div className="form__control">
          <label htmlFor="address" className="form__label">
            Address
          </label>
          <span className="form__hint" id="address-hint">
            Enter your address on separate lines
          </span>
          <textarea
            name="address"
            id="address"
            rows={6}
            className="form__input"
            autoComplete="home"
            value={personalInfo.address}
            onChange={handleAddressChange}></textarea>
        </div>
        <div className="form__control">
          <label htmlFor="state" className="form__label">
            State
          </label>
          <input
            type="text"
            name="state"
            id="state"
            className="form__input"
            autoComplete="address-level1"
            value={personalInfo.state}
            onChange={handleStateChange}
          />
        </div>
        <div className="form__control">
          <label htmlFor="country" className="form__label">
            Country
          </label>
          <input
            type="text"
            name="country"
            id="country"
            className="form__input"
            autoComplete="country-name"
            value={personalInfo.country}
            onChange={handleCountryChange}
          />
        </div>
        <div className="form__control">
          <label htmlFor="aboutMe" className="form__label">
            About Me
          </label>
          <span className="form__hint">Describe yourself in short</span>
          <textarea
            name="aboutMe"
            id="aboutMe"
            rows={6}
            className="form__input"
            value={personalInfo.aboutMe}
            onChange={handleAboutMeChange}></textarea>
        </div>

        <FormButtons onClick={handleReset} />
      </form>
    </div>
  )
}

export default PersonalDetails
