import { SubmitHandler, useForm } from 'react-hook-form'
import { postDataTodoAsync } from '../../helpers/FetchDataAsync'
import { Todo } from '../../interfaces/todo'
import { TodoCategory } from '../../interfaces/todoCategory'
import { getCategoryStateSelector } from '../../reducers/categoryReducer'

import { useAppDispatch, useAppSelector } from '../../store/store.hooks'

export const FormTodo = ({ categoryTodo }: AppProps) => {
  const getCategoryStateSelectorStore = useAppSelector(getCategoryStateSelector)
  const dispatch = useAppDispatch()

  const { register, handleSubmit } = useForm<Todo>({
    defaultValues: {
      name: '',
      completed: false,
      categoryTodoId: categoryTodo.id,
    },
  })
  const onSubmit: SubmitHandler<Todo> = (todo) => {
    const category = getCategoryStateSelectorStore.category

    dispatch(postDataTodoAsync(todo, category))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        {...register('name')}
      />
    </form>
  )
}
type AppProps = {
  categoryTodo: TodoCategory
}
