import { useState } from 'react'
import FormButtons from './FormButtons'
import checkMarkIcon from '../assets/images/icon-check.svg'
import errorIcon from '../assets/images/icon-error.svg'

const ReferenceForm = ({
  referenceDetails,
  setReferenceDetails,
  onSubmit,
  setterFuncEntry,
  setterFuncData,
  data,
}) => {
  const [inputBlurred, setInputBlurred] = useState({
    email: false,
    phoneNumber: false,
  })
  const [isCorrect, setIsCorrect] = useState({
    email: false,
    phoneNumber: false,
  })

  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('')


  const handleFullNameChange = (e) => {
    setReferenceDetails({ ...referenceDetails, fullName: e.target.value })
  }

  const handleEmailChange = (e) => {
    setReferenceDetails({ ...referenceDetails, email: e.target.value })
    setInputBlurred({ ...inputBlurred, email: false })
  }
  const handlePhoneNumberChange = (e) => {
    setReferenceDetails({ ...referenceDetails, phoneNumber: e.target.value })
    setInputBlurred({ ...inputBlurred, phoneNumber: false })
  }

  const handleReset = () => {
    setReferenceDetails({
      id: crypto.randomUUID(),
      fullName: '',
      email: '',
      phoneNumber: '',
    })

    setInputBlurred({
      ...inputBlurred,
      email: false,
      phoneNumber: false,
    })
  }

  const handleEmailValidation = () => {
    const emailRegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    setInputBlurred({ ...inputBlurred, email: true })
    if (emailRegExp.test(referenceDetails.email)) {
      setIsCorrect({ ...isCorrect, email: true })
    } else {
      setIsCorrect({ ...isCorrect, email: false })
      setEmailErrorMessage('Please enter a valid email address')
    }
  }

  const handlePhoneNumberValidation = () => {
    const phoneNumberRegExp = /^(\d{10}|\d{3}[-\s.]\d{3}[-\s.]\d{4})$/
    setInputBlurred({ ...inputBlurred, phoneNumber: true })
    if (phoneNumberRegExp.test(referenceDetails.phoneNumber)) {
      setIsCorrect({ ...isCorrect, phoneNumber: true })
    } else {
      setIsCorrect({ ...isCorrect, phoneNumber: false })
      setPhoneErrorMessage('Please enter a valid phone number')
    }
  }

  const handleFormValidation = (e) => {
    const isEmailEmpty = !referenceDetails.email
    const isPhoneNumberEmpty = !referenceDetails.phoneNumber
    const isEmailValid = referenceDetails.email && isCorrect.email
    const isPhoneNumberValid =
      referenceDetails.phoneNumber && isCorrect.phoneNumber

    e.preventDefault()

    if (
      (isEmailEmpty && isPhoneNumberValid) ||
      (isPhoneNumberEmpty && isEmailValid) ||
      isEmailEmpty || isPhoneNumberEmpty ||
      isEmailValid || isPhoneNumberValid
    ) {
      onSubmit(setterFuncEntry, setterFuncData, referenceDetails, data)
    }
  }

  return (
    <div className="reference-form">
      <form className="form" noValidate onSubmit={handleFormValidation}>
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
              aria-describedby="email-hint invalid-email"
              autoComplete="email"
              inputMode="email"
              value={referenceDetails.email}
              onChange={handleEmailChange}
              onBlur={handleEmailValidation}
            />
            {referenceDetails.email &&
              isCorrect.email &&
              inputBlurred.email && (
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
          {referenceDetails.email && !isCorrect.email && inputBlurred.email && (
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
            Allowed formats: 1234567890 or 1234-567-890 or 1234 567 890 or
            1234.567.890
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
              value={referenceDetails.phoneNumber}
              onChange={handlePhoneNumberChange}
              onBlur={handlePhoneNumberValidation}
            />
            {referenceDetails.phoneNumber &&
              isCorrect.phoneNumber &&
              inputBlurred.phoneNumber && (
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
          {referenceDetails.phoneNumber &&
            !isCorrect.phoneNumber &&
            inputBlurred.phoneNumber && (
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
                  {phoneErrorMessage}
                </p>
              </div>
            )}
        </div>

        <FormButtons onClick={handleReset} />
      </form>
    </div>
  )
}

export default ReferenceForm
