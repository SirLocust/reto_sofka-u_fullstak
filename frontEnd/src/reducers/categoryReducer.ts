import { Todo } from './../interfaces/todo'
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
    addTodo: (state, action: PayloadAction<Todo>) => {
      return {
        ...state,
        category: {
          ...state.category,
          todos: [action.payload, ...state.category.todos],
        },
      }
    },
    deleteTodo: (state, action: PayloadAction<Todo>) => {
      return {
        ...state,
        category: {
          ...state.category,
          todos: state.category.todos.filter(
            (todo) => todo.id !== action.payload.id
          ),
        },
      }
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      return {
        ...state,
        category: {
          ...state.category,
          todos: state.category.todos.map((todo) => {
            if (todo.id === action.payload.id) {
              todo = action.payload
            }
            return todo
          }),
        },
      }
    },
  },
})
export const { addCategory, addTodo, deleteTodo, updateTodo } =
  categoryReducer.actions
export const getCategoryStateSelector = (state: RootState) =>
  state.CategoryState
export default categoryReducer.reducer as Reducer<typeof initialState>
