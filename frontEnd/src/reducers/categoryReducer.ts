import { RootState } from './../store/store'
import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit'
import { CategoryState } from '../interfaces/categoryState'
import { TodoCategory } from '../interfaces/todoCategory'

const initialState: CategoryState = {
  category: {
    id: 0,
    name: '',
    todos: [],
  },
  isEditing: false,
}

const categoryReducer = createSlice({
  name: 'stateCategory',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<TodoCategory>) => {
      return {
        ...state,
        category: action.payload,
      }
    },
  },
})
export const { addCategory } = categoryReducer.actions
export const getCategoryStateSelector = (state: RootState) =>
  state.CategoryState
export default categoryReducer.reducer as Reducer<typeof initialState>
