import { updateTodo, addTodo, deleteTodo } from './../reducers/categoryReducer'
import { AppDispatch, RootState } from '../store/store'
import { Action, ThunkAction } from '@reduxjs/toolkit'
import { ListTodoCategories } from '../interfaces/listTodoCategory'

import {
  addTodos,
  deleteTodos,
  setTodos,
  updateTodos,
} from '../reducers/todosListReducer'
import { TodoCategory } from '../interfaces/todoCategory'
import { Todo } from '../interfaces/todo'

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

    const data = (await resp.json()).data as TodoCategory
    console.log(data)

    dispatch(addTodos(data))
  }

export const deleteDataAsync =
  (id: number): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: AppDispatch) => {
    const url = `http://localhost:8081/api/categories/${id}`
    const resp = await fetch(url, {
      method: 'DELETE',
    })

    const data = (await resp.json()).data as TodoCategory

    dispatch(deleteTodos(data))
  }

export const postDataTodoAsync =
  (
    todo: Todo,
    category: TodoCategory
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: AppDispatch) => {
    const url = `http://localhost:8081/api/todo`
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    })

    const data = (await resp.json()).data as Todo
    console.log(data)
    const newCategory: TodoCategory = {
      ...category,
      todos: [...category.todos, data],
    }
    console.log(newCategory)
    dispatch(addTodo(data))
    dispatch(updateTodos(newCategory))
  }
export const putDataTodoAsync =
  (
    todo: Todo,
    category: TodoCategory
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: AppDispatch) => {
    const url = `http://localhost:8081/api/todo`
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    })
    const data = (await resp.json()).data as Todo

    const newCategory: TodoCategory = {
      ...category,
      todos: category.todos.map((todoG) => {
        if (todoG.id === data.id) {
          return data
        }
        return todoG
      }),
    }
    dispatch(updateTodo(data))
    dispatch(updateTodos(newCategory))
  }

export const deleteDataTodoAsync =
  (
    id: number,
    category: TodoCategory
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch: AppDispatch) => {
    const url = `http://localhost:8081/api/todo/${id}`
    const resp = await fetch(url, {
      method: 'DELETE',
    })

    const data = (await resp.json()).data as Todo
    console.log(data)

    const newCategory: TodoCategory = {
      ...category,
      todos: category.todos.filter((todoG) => todoG.id !== data.id),
    }
    console.log(newCategory)
    dispatch(deleteTodo(data))
    dispatch(updateTodos(newCategory))
  }
