import React from 'react'
import { TodoCategory } from '../../interfaces/todoCategory'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAppDispatch } from '../../store/store.hooks'
import { postDataAsync } from '../../helpers/FetchDataAsync'

export const FormTodoCategory: React.FC = () => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm<TodoCategory>({
    defaultValues: {
      name: 's',
      todos: [],
    },
  })
  const onSubmit: SubmitHandler<TodoCategory> = (data) => {
    dispatch(postDataAsync(data))
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />

      <input type="submit" />
    </form>
  )
}
