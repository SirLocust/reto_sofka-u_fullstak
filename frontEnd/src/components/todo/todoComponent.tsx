import React from 'react'
import { Todo } from '../../interfaces/todo'
// import { getListTodosSelector } from '../../reducers/todosListReducer'

export const TodoComponent = ({ todo }: AppProsp) => {
  // const  = useSelector(getListTodosSelector)
  return (
    <li key={todo.id} className="completed">
      <div className="view">
        <input className="toggle" type="checkbox" checked />
        <label>{todo.name}</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" />
    </li>
  )
}

type AppProsp = {
  todo: Todo
}
