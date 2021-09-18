import { useEffect } from 'react'

import { getDataAsync } from '../../helpers/FetchDataAsync'

import { getListTodosSelector } from '../../reducers/todosListReducer'
import { useAppDispatch, useAppSelector } from '../../store/store.hooks'
import { CategoryTodo } from '../categoryTodo/categoryTodoComponent'

export const PageTodoCategory: React.FC = () => {
  const listCategoriesTodo = useAppSelector(getListTodosSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getDataAsync())
  }, [dispatch])

  return (
    <div className="container">
      {listCategoriesTodo.listTodos.map((todoCategory) => (
        <CategoryTodo key={todoCategory.id} categoryTodo={todoCategory} />
      ))}
    </div>
  )
}
