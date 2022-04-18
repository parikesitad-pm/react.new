import * as News from '../types'

export function fetchNewsRequested(data) {
  return {
    type: News.FETCH_NEWS_REQUESTED,
    data,
  }
}

export function fetchNewsFinished(data) {
  return {
    type: News.FETCH_NEWS_FINISHED,
    data,
  }
}
