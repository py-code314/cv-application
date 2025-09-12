import '../styles/PersonalDetails.css'

const PersonalDetails = () => {
  return (
    <div className="personal-info">
      <h2 className="personal-info__heading">Personal Details</h2>
      <p className="personal-info__text">
        Research suggests that users who add phone number and email receive more
        positive feedback from recruiters.
      </p>
      <form action="#" className="form" noValidate>
        <div className="form__control">
          <label htmlFor="first-name" className="form__label">
            First Name (required)
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            className="form__input"
            autoComplete="given-name"
            required
          />
        </div>
        <div className="form__control">
          <label htmlFor="last-name" className="form__label">
            Last Name (required)
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            className="form__input"
            autoComplete="family-name"
            required
          />
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
            />
            <span
              className="form__checkmark"
              id="valid-email"
              aria-hidden="true"></span>
          </div>
          <span
            className="form__error"
            id="invalid-email"
            aria-live="polite"></span>
        </div>
        <div className="form__control">
          <label htmlFor="phone" className="form__label">
            Phone Number
          </label>
          <span className="form__hint" id="phone-hint">
            Eg. + 1 1234-567-890
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
            />
            <span
              className="form__checkmark"
              id="valid-phone"
              aria-hidden="true"></span>
          </div>
          <span
            className="form__error"
            id="invalid-phone"
            aria-live="polite"></span>
        </div>
        <div className="form__control">
          <label htmlFor="address" className="form__label">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="form__input"
            autoComplete="home"
          />
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
          />
        </div>
      </form>
    </div>
  )
}

export default PersonalDetails
