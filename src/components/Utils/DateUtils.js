import { formatDistanceToNow, fromUnixTime } from 'date-fns'

/**
 * Converts a date into a "xxxx ago" format.
 * 
 * @param time unix timestamp to convert
 */
export const ParseToTimeDistance = (time) => {
    const formatedTime = fromUnixTime(time)
    const dateTime = formatDistanceToNow(
        formatedTime
      ) + ' ago'
    return dateTime
}