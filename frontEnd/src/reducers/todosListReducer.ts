import { TodoCategory } from './../interfaces/todoCategory'
import { RootState } from './../store/store'
import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit'
import { ListTodoCategories } from '../interfaces/listTodoCategory'

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
    setTodos: (state, action: PayloadAction<ListTodoCategories>) => {
      return {
        listTodos: action.payload.listTodos,
      }
    },
    deleteTodo: (state, action: PayloadAction<TodoCategory>) => {
      return {
        ...state,
        listTodos: state.listTodos.filter(
          (todoCategory) => todoCategory.id !== action.payload.id
        ),
      }
    },
  },
})

export const { addTodos, setTodos, deleteTodo } = todosListReducer.actions

export const getListTodosSelector = (state: RootState) =>
  state.listTodosCategories

export default todosListReducer.reducer as Reducer<typeof initialState>
