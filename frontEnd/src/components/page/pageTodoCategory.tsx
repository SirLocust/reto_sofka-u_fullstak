import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getDataAsync } from '../../helpers/FetchDataAsync'

import { getListTodosSelector } from '../../reducers/todosListReducer'
import { useAppDispatch } from '../../store/store.hooks'
import { CategoryTodo } from '../categoryTodo/categoryTodo'

export const PageTodoCategory: React.FC = () => {
  const listCategoriesTodo = useSelector(getListTodosSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // dispatch(addTodos)
    dispatch(getDataAsync())
  }, [listCategoriesTodo])

  return (
    <div>
      {listCategoriesTodo.listTodos.map((todoCategory, index) => (
        <CategoryTodo key={index} categoryTodo={todoCategory} />
        // <p key={index}>{todoCategory.name}</p>
      ))}
    </div>
  )
}
