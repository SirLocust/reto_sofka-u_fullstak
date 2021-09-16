import { getDatAsync } from './../helpers/getDataAsync'
import { RootState } from './../store/store'
import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit'
import { ListTodoCategories } from '../interfaces/listTodoCategory'

import { TodoCategory } from '../interfaces/todoCategory'

const initialState: ListTodoCategories = {
  listTodos: [],
}

const todosListReducer = createSlice({
  name: 'listTodosCategories',
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<TodoCategory>) => {
      return {
        listTodos: [...state.listTodos, action.payload],
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getDatAsync.fulfilled,
      (state, action: PayloadAction<ListTodoCategories>) => {
        return {
          ...state,
          listTodos: action.payload.listTodos,
        }
      }
    )
  },
})

export const { addTodos } = todosListReducer.actions

export const getListTodosSelector = (state: RootState) =>
  state.listTodosCategories

export default todosListReducer.reducer as Reducer<typeof initialState>
