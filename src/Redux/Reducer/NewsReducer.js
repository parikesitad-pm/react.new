import * as News from '../types'

const initialState = {
  list: [],
}

export default function NewsReducer(state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case News.FETCH_NEWS_FINISHED: {
      newState.list = action.data
      return { ...newState }
    }

    default:
      return state
  }
}
