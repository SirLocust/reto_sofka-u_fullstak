import { useSelector } from 'react-redux'

import { getListTodosSelector } from '../reducers/todosListReducer'

export const PageTodoCategory: React.FC = () => {
  const listCategoriesTodo = useSelector(getListTodosSelector)

  return (
    <div>
      {listCategoriesTodo.listTodos.map((todoCategory) => (
        <p key={todoCategory.id}>{todoCategory.name}</p>
      ))}
    </div>
  )
}
