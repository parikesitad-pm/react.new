import { createSelector } from 'reselect'

const NewsSelector = (state) => state.News

export const List = () => createSelector(NewsSelector, (state) => state.list)
