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
