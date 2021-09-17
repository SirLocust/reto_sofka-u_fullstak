import { SubmitHandler, useForm } from 'react-hook-form'
import { postDataAsync } from '../../helpers/FetchDataAsync'
import { Todo } from '../../interfaces/todo'
import { TodoCategory } from '../../interfaces/todoCategory'
import { useAppDispatch } from '../../store/store.hooks'

export const FormTodo = ({ categoryTodo }: AppProps) => {
  const dispatch = useAppDispatch()

  const { register, handleSubmit } = useForm<Todo>({
    defaultValues: {
      name: '',
    },
  })
  const onSubmit: SubmitHandler<Todo> = (todo) => {
    const newCategoryTodo: TodoCategory = {
      ...categoryTodo,
      todos: [...categoryTodo.todos, todo],
    }
    dispatch(postDataAsync(newCategoryTodo))
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
