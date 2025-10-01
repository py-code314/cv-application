import { formatCurrentDate, generateMinDate } from '../scripts/dates'
import FormButtons from './FormButtons'

/* Component that handles the education form */
const EducationForm = ({
  data,
  setData,
  educationDetails,
  setEducationDetails,
  setEntryToEdit,
  onSubmit,
}) => {
  const today = new Date()
  const todayDate = formatCurrentDate(today)
  const minDate = generateMinDate(today)

  // Functions to handle user input
  const handleDegreeChange = (e) => {
    setEducationDetails({
      ...educationDetails,
      degree: e.target.value,
    })
  }
  const handleSchoolNameChange = (e) => {
    setEducationDetails({
      ...educationDetails,
      schoolName: e.target.value,
    })
  }
  const handleCityChange = (e) => {
    setEducationDetails({
      ...educationDetails,
      city: e.target.value,
    })
  }
  const handleStartDateChange = (e) => {
    setEducationDetails({
      ...educationDetails,
      startDate: e.target.value,
    })
  }
  const handleEndDateChange = (e) => {
    setEducationDetails({
      ...educationDetails,
      endDate: e.target.value,
    })
  }
  const handleDescriptionChange = (e) => {
    setEducationDetails({
      ...educationDetails,
      description: e.target.value,
    })
  }

  // Function to reset the form
  const handleReset = () => {
    setEducationDetails({
      ...educationDetails,
      id: crypto.randomUUID(),
      type: 'education',
      degree: '',
      schoolName: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
    })
  }

  // Function to handle form submission
  const handleSubmitEducationForm = (e) => {
    e.preventDefault()
    onSubmit(e.target.id, setEntryToEdit, setData, educationDetails, data)
  }

  return (
    <div className="education-form">
      {/* Education form */}
      <form
        className="form"
        id="education"
        onSubmit={handleSubmitEducationForm}>
        {/* Form fields */}
        {/* Degree */}
        <div className="form__control">
          <label htmlFor="degree" className="form__label">
            Degree
          </label>
          <input
            type="text"
            name="degree"
            id="degree"
            className="form__input"
            value={educationDetails.degree}
            onChange={handleDegreeChange}
          />
        </div>
        {/* School name */}
        <div className="form__control">
          <label htmlFor="school-name" className="form__label">
            School
          </label>
          <input
            type="text"
            name="school-name"
            id="school-name"
            className="form__input"
            value={educationDetails.schoolName}
            onChange={handleSchoolNameChange}
          />
        </div>
        {/* City */}
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
            value={educationDetails.city}
            onChange={handleCityChange}
          />
        </div>
        {/* Start date and end date */}
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
            value={educationDetails.startDate}
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
            value={educationDetails.endDate}
            onChange={handleEndDateChange}
          />
        </div>
        {/* Description */}
        <div className="form__control">
          <label htmlFor="description" className="form__label">
            Description
          </label>
          <span className="form__hint">
            List your academic experience, projects, and accomplishments.
          </span>
          <textarea
            name="description"
            id="description"
            rows={8}
            className="form__input"
            value={educationDetails.description}
            onChange={handleDescriptionChange}></textarea>
        </div>

        <FormButtons onCancel={handleReset} />
      </form>
    </div>
  )
}

export default EducationForm
