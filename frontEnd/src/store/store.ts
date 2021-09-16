import { configureStore } from '@reduxjs/toolkit'

import thunk from 'redux-thunk'
import listTodosCategories from '../reducers/todosListReducer'
export const store = configureStore({
  reducer: {
    listTodosCategories,
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
