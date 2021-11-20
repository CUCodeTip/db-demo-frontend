export const getDateAsInput = (date: Date) => {
  const month = (date.getMonth() + 1)
  const day = date.getDate()
  return `${date.getFullYear()}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`
}

export const formatDate = (date: Date) => {
  return `${String(date.getDate()).padStart(2, '0')}/${
    String(date.getMonth() + 1).padStart(2, '0')}/${
    String(date.getFullYear())}`
}

export const formatTime = (date: Date) => {
  return `${String(date.getHours()).padStart(2, '0')}:${
    String(date.getMinutes()).padStart(2, '0')}`
}

export const formatDateTime = (date: Date) => {
  return `${formatTime(date)} ${formatDate(date)}`
}
