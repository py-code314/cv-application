/* Format a date object into a string in the format YYYY-MM */
export const formatCurrentDate = (date) => {
  const month = date.getMonth() + 1
  const formattedMonth = month < 10 ? `0${month}` : `${month}`
  const year = date.getFullYear()

  const formattedDate = `${year}-${formattedMonth}`

  return formattedDate
}

/* Generate a minimum date string in the format YYYY-MM, which is 100 years ago from the given date */
export const generateMinDate = (date) => {
  const dateCopy = new Date(date)
  dateCopy.setFullYear(dateCopy.getFullYear() - 100)
  const month = dateCopy.getMonth()
  const formattedMonth = month < 10 ? `0${month}` : `${month}`
  const year = dateCopy.getFullYear()

  const formattedMinDate = `${year}-${formattedMonth}`

  return formattedMinDate
}

/* Format a date object into a string in the format "MMM yyyy" (e.g. "Jun 2021") */
export const formatMonth = (date) => {
  // console.log('Date short:', date)
  const dateString = new Date(date + '-15')
  const options = { year: 'numeric', month: 'short', timeZone: 'UTC' }

  const formattedDate = new Date(dateString).toLocaleDateString(
    'en-US',
    options
  )
  return formattedDate
}
