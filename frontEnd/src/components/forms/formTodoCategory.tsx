import React from 'react'
import { TodoCategory } from '../../interfaces/todoCategory'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../store/store.hooks'

import { getDatAsync } from '../../helpers/getDataAsync'

export const FormTodoCategory: React.FC = () => {
  const dispatch = useAppDispatch()

  const { register, handleSubmit } = useForm<TodoCategory>({
    defaultValues: {
      id: Date.now(),
      name: 'ejercisio',
      todos: [],
    },
  })
  const onSubmit: SubmitHandler<TodoCategory> = (data) => {
    dispatch(getDatAsync(data))
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />

      <input type="submit" />
    </form>
  )
}
