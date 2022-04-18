import { all, fork } from 'redux-saga/effects'

import { fetchNewsAction } from './NewsSaga'

export default function* saga() {
  yield all([fork(fetchNewsAction)])
}
