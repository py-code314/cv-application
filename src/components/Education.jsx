import { useState } from 'react'
import '../styles/Education.css'
import addIcon from '../assets/images/icon-add.svg'

const EducationForm = ({ onSubmit, data }) => {
  const [educationDetails, setEducationDetails] = useState(
    data || {
      degree: '',
      schoolName: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
    }
  )

  const generateCurrentDate = (date) => {
    const month = date.getMonth() + 1
    const formattedMonth = month < 10 ? `0${month}` : `${month}`
    const year = date.getFullYear()

    const formattedDate = `${year}-${formattedMonth}`

    return formattedDate
  }

  const generateMinDate = (date) => {
    const dateCopy = new Date(date)
    dateCopy.setFullYear(dateCopy.getFullYear() - 100)
    const month = dateCopy.getMonth()
    const formattedMonth = month < 10 ? `0${month}` : `${month}`
    const year = dateCopy.getFullYear()

    const formattedDate = `${year}-${formattedMonth}`

    return formattedDate
  }
  const today = new Date()
  const todayDate = generateCurrentDate(today)
  const minDate = generateMinDate(today)

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

  const handleReset = () => {
    setEducationDetails({
      degree: '',
      schoolName: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault
    onSubmit(educationDetails)
  }

  return (
    <div className="education">
      <h2 className="education__heading">Education</h2>
      <p className="education__text">
        Highlight your academic achievements and qualifications. Providing
        details about your education can help recruiters understand your
        background and expertise.
      </p>

      <form className="form" onSubmit={handleFormSubmit}>
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
        <div className="form__control">
          <label htmlFor="description" className="form__label">
            Description
          </label>
          <span className="form__hint">
            Summarize your academic experience, projects, or accomplishments.
          </span>
          <textarea
            name="description"
            id="description"
            rows={10}
            className="form__input"
            value={educationDetails.description}
            onChange={handleDescriptionChange}></textarea>
        </div>

        <div className="btns btns--form">
          <button
            type="button"
            className="btn btn--cancel"
            id="cancel-btn"
            onClick={handleReset}>
            Cancel
          </button>
          <button type="submit" className="btn btn--submit" id="submit-btn">
            Save
          </button>
        </div>
      </form>

      <button className="btn btn--add">
        <img src={addIcon} alt="" width={25} height={25} className='add-icon'/>
        <span>Add Degree</span>
      </button>
    </div>
  )
}

export default EducationForm
