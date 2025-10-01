import { formatCurrentDate, generateMinDate } from '../scripts/dates'
import FormButtons from './FormButtons'

const EmploymentForm = ({
  data,
  setData,
  employmentDetails,
  setEmploymentDetails,
  setEntryToEdit,
  onSubmit,
}) => {
  const today = new Date()
  const todayDate = formatCurrentDate(today)
  const minDate = generateMinDate(today)

  const handleJobTitleChange = (e) => {
    setEmploymentDetails({
      ...employmentDetails,
      jobTitle: e.target.value,
    })
  }
  const handleEmployerChange = (e) => {
    setEmploymentDetails({
      ...employmentDetails,
      employer: e.target.value,
    })
  }
  const handleCityChange = (e) => {
    setEmploymentDetails({
      ...employmentDetails,
      city: e.target.value,
    })
  }
  const handleStartDateChange = (e) => {
    setEmploymentDetails({
      ...employmentDetails,
      startDate: e.target.value,
    })
  }
  const handleEndDateChange = (e) => {
    setEmploymentDetails({
      ...employmentDetails,
      endDate: e.target.value,
    })
  }
  const handleDescriptionChange = (e) => {
    setEmploymentDetails({
      ...employmentDetails,
      description: e.target.value,
    })
  }

  const handleReset = () => {
    setEmploymentDetails({
      ...employmentDetails,
      id: crypto.randomUUID(),
      type: 'employment',
      jobTitle: '',
      employer: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
    })
  }

  const handleSubmitEmploymentForm = (e) => {
    e.preventDefault()
    onSubmit(e.target.id, setEntryToEdit, setData, employmentDetails, data)
  }
  return (
    <div className="employment-form">
      <form
        className="form"
        id="employment"
        onSubmit={handleSubmitEmploymentForm}>
        <div className="form__control">
          <label htmlFor="jobTitle" className="form__label">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            className="form__input"
            autoComplete="organization-title"
            value={employmentDetails.jobTitle}
            onChange={handleJobTitleChange}
          />
        </div>
        <div className="form__control">
          <label htmlFor="employer" className="form__label">
            Employer
          </label>
          <input
            type="text"
            name="employer"
            id="employer"
            className="form__input"
            autoComplete="organization"
            value={employmentDetails.employer}
            onChange={handleEmployerChange}
          />
        </div>
        <div className="form__control">
          <label htmlFor="city" className="form__label">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="form__input"
            autoComplete="address-level2"
            value={employmentDetails.city}
            onChange={handleCityChange}
          />
        </div>
        <div className="form__control">
          <label htmlFor="start-date" className="form__label">
            Start Date
          </label>
          <span className="form__hint">E.g. Jan 2000</span>
          <input
            type="month"
            name="start-date"
            id="start-date"
            className="form__input"
            min={minDate}
            max={todayDate}
            value={employmentDetails.startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="form__control">
          <label htmlFor="end-date" className="form__label">
            End Date
          </label>
          <span className="form__hint">E.g. Apr 2003</span>
          <input
            type="month"
            name="end-date"
            id="end-date"
            className="form__input"
            min={minDate}
            max={todayDate}
            value={employmentDetails.endDate}
            onChange={handleEndDateChange}
          />
        </div>
        <div className="form__control">
          <label htmlFor="description" className="form__label">
            Description
          </label>
          <span className="form__hint">
            List your responsibilities, achievements etc. here
          </span>
          <textarea
            name="description"
            id="description"
            rows={8}
            className="form__input"
            value={employmentDetails.description}
            onChange={handleDescriptionChange}></textarea>
        </div>

        <FormButtons onCancel={handleReset} />
      </form>
    </div>
  )
}

export default EmploymentForm
