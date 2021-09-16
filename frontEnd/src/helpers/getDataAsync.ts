import { createAsyncThunk } from '@reduxjs/toolkit'
import { ListTodoCategories } from '../interfaces/listTodoCategory'
import { TodoCategory } from '../interfaces/todoCategory'

export const getDatAsync = createAsyncThunk(
  'listTodosCategories/getData',
  async () => {
    const url = `fakeData.json`
    const resp = await fetch(url)

    const data = (await resp.json()) as TodoCategory[]
    const listTodoCategories: ListTodoCategories = {
      listTodos: data,
    }

    return listTodoCategories
  }
)
