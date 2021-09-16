import { createAsyncThunk } from '@reduxjs/toolkit'
import { TodoCategory } from '../interfaces/todoCategory'

export const getDatAsync = createAsyncThunk(
  'listTodosCategories/getData',
  async (data1: TodoCategory) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=O7yepbUfVev2kj0h1qqepx8RPIdutVvT&q=naruto`
    const resp = await fetch(url)
    const data = await resp.json()

    data1.name = data.data[0].slug
    return data1
  }
)
