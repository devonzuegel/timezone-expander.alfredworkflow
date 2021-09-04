import strSimilarity from 'string-similarity'
import date_fns from 'date-fns'
import timezone_fns from 'date-fns-tz'
import {tzNames} from './timezone_names.js'

const city_to_tz = (city) => {
  switch (city.toLowerCase()) {
    case 'sf':
    case 'san francisco':
    case 'la':
    case 'pt':
    case 'pst':
    case 'pdt':
    case 'los angeles':
      return 'America/Los_Angeles'

    case 'uk':
    case 'london':
    case 'manchester':
      return 'Europe/London'

    case 'nyc':
    case 'boston':
    case 'miami':
    case 'est':
    case 'edt':
    case 'et':
      return 'America/New_York'

    case 'sofia':
      return 'Europe/Sofia'

    case 'bsas':
      return 'America/Argentina/Buenos_Aires'

    case 'philippines':
      'Asia/Manila'

    case 'berlin':
      return 'Europe/Berlin'

    case 'new zealand':
    case 'nz':
      return 'Pacific/Auckland'

    default:
      return strSimilarity.findBestMatch(city, tzNames).bestMatch.target
  }
}

const pprint = (obj) => {
  console.log(JSON.stringify(obj, null, 2))
}

/**
 * local_time: fuzzy date with case-insensitive am/pm ("10am", "11:30pm", "7:43AM")
 * returns:    a parsed date that can be manipulated by the datefn libraries
 */
const get_local_time = (local_time) => {
  if (local_time.includes(':')) {
    return date_fns.parse(local_time, 'hh:mmaaa', new Date())
  } else {
    return date_fns.parse(local_time, 'hhaaa', new Date())
  }
}

/**
 * date:    a date that can be manipulateby the datefn libraries
 * returns: a fmt time with minutes when they are non-zero
 */
const format_time = (date) => {
  const format = date_fns.format
  if (format(date, 'mm') == '00') {
    return format(date, 'haaa')
  } else {
    return format(date, 'h:mmaaa')
  }
}

const toSentenceCase = (str) => {
  return str
    .split(' ')
    .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(' ')
}

export const tz_expander = (input, test) => {
  const [local_time, ...cities] = input
    .trim()
    .split(input.includes('/') ? '/' : ' ')
    .map((s) => s.trim())

  const times = cities.map((city) => {
    const tz = city_to_tz(city)
    const parsed_local_time = get_local_time(local_time)
    const zoned_date = timezone_fns.utcToZonedTime(parsed_local_time, tz)

    const fmt_date = format_time(zoned_date)
    const fmt_city = city.length == 2 ? city.toUpperCase() : toSentenceCase(city)
    return fmt_date + ' ' + fmt_city
  })

  return times.join(' / ')
}
