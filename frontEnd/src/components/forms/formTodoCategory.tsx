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
    <div className="input-container">
      <form className="flex-coluum" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          placeholder="ingrese una nueva nota"
          {...register('name')}
        />

        <input type="submit" className="btn1" />
      </form>
    </div>
  )
}
