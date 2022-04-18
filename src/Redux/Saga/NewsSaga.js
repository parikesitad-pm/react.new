import * as N from '../types'
import * as NewsAction from '../Action/NewsAction'

import { call, put, takeLatest } from 'redux-saga/effects'

import axios from 'axios'

const baseAPI = process.env.REACT_APP_API_URL

function* fetchNewsProcess() {
  try {
    const { data } = yield call(axios.get, `${baseAPI}`)
    yield put(NewsAction.fetchNewsFinished(data.data))
  } catch (error) {
    Promise.reject(error)
  }
}

export function* fetchNewsAction() {
  yield takeLatest(N.FETCH_NEWS_REQUESTED, fetchNewsProcess)
}
