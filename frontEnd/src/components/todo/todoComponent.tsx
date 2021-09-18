import React from 'react'
import { useDispatch } from 'react-redux'
import {
  deleteDataTodoAsync,
  putDataTodoAsync,
} from '../../helpers/FetchDataAsync'
import { Todo } from '../../interfaces/todo'

import { getCategoryStateSelector } from '../../reducers/categoryReducer'

import { useAppSelector } from '../../store/store.hooks'

export const TodoComponent = ({ todo }: AppProsp) => {
  const getCategoryStateSelectorStore = useAppSelector(getCategoryStateSelector)
  const category = getCategoryStateSelectorStore.category
  const dispatch = useDispatch()
  // const  = useSelector(getListTodosSelector)
  const hadledDelete = (id: number, e: React.SyntheticEvent) => {
    e.preventDefault()
    dispatch(deleteDataTodoAsync(id, category))
  }
  const handledUpdate = () => {
    const newTodo: Todo = {
      ...todo,
      completed: !todo.completed,
    }

    dispatch(putDataTodoAsync(newTodo, category))
    // dispatch(updateTodos(newCategory))
  }
  return (
    <form action="">
      <li key={todo.id} className={todo.completed ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            checked={todo.completed}
            type="checkbox"
            onClick={() => {
              handledUpdate()
            }}
          />
          <label>{todo.name + todo.id}</label>
          <button
            className="destroy"
            onClick={(e: React.SyntheticEvent) => {
              hadledDelete(todo.id, e)
            }}
          ></button>
        </div>
        <input className="edit" />
      </li>
    </form>
  )
}

type AppProsp = {
  todo: Todo
}
