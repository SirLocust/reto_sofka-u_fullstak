import { AppDispatch, RootState } from '../store/store'
import { Action, ThunkAction } from '@reduxjs/toolkit'
import { ListTodoCategories } from '../interfaces/listTodoCategory'

import { addTodos, deleteTodo, setTodos } from '../reducers/todosListReducer'
import { TodoCategory } from '../interfaces/todoCategory'

export const getDataAsync =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: AppDispatch) => {
    const url = `http://localhost:8081/api/categories`
    const resp = await fetch(url)

    const data = (await resp.json()).data as TodoCategory[]
    // console.log(data)
    const listTodoCategories: ListTodoCategories = {
      listTodos: data,
    }
    dispatch(setTodos(listTodoCategories))
  }

export const postDataAsync =
  (
    categoryTodo: TodoCategory
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: AppDispatch) => {
    const url = `http://localhost:8081/api/categories`
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(categoryTodo),
    })

    const data = (await resp.json()) as TodoCategory
    console.log(data)

    dispatch(addTodos(data))
  }

export const deleteDataAsync =
  (id: number): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: AppDispatch) => {
    console.log('hola')
    const url = `http://localhost:8081/api/categories/${id}`
    const resp = await fetch(url, {
      method: 'DELETE',
    })

    const data = (await resp.json()).data as TodoCategory

    dispatch(deleteTodo(data))
  }
