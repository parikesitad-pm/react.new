import moment from 'moment'

export const customDateFormat = (object, params, withSecond = false) => {
  const dateType = withSecond ? 'DD MMMM YYYY HH:mm:ss' : 'DD-MMM-YYYY'
  const data = object[params]
  if (data && data !== '' && data !== '0001-01-01T00:00:00') {
    return moment(data).format(dateType)
  }
  return '-'
}
