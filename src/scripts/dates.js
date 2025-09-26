export const formatCurrentDate = (date) => {
  const month = date.getMonth() + 1
  const formattedMonth = month < 10 ? `0${month}` : `${month}`
  const year = date.getFullYear()

  const formattedDate = `${year}-${formattedMonth}`

  return formattedDate
}

export const generateMinDate = (date) => {
  const dateCopy = new Date(date)
  dateCopy.setFullYear(dateCopy.getFullYear() - 100)
  const month = dateCopy.getMonth()
  const formattedMonth = month < 10 ? `0${month}` : `${month}`
  const year = dateCopy.getFullYear()

  const formattedMinDate = `${year}-${formattedMonth}`

  return formattedMinDate
}

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
