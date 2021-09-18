import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  deleteDataTodoAsync,
  putDataTodoAsync,
} from '../../helpers/FetchDataAsync'
import { Todo } from '../../interfaces/todo'

import { getCategoryStateSelector } from '../../reducers/categoryReducer'

import { useAppSelector } from '../../store/store.hooks'

export const TodoComponent = ({ todo }: AppProsp) => {
  const [isEditing, setIsEditing] = useState(false)
  const [valueInput, setValueInput] = useState('')

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
  const handleToggleEdit = () => {
    setIsEditing(true)
  }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      const newTodo: Todo = {
        ...todo,
        name: valueInput,
      }

      dispatch(putDataTodoAsync(newTodo, category))
      setIsEditing(false)
    }
  }
  return (
    <form action="">
      <li
        key={todo.id}
        className={isEditing ? 'editing' : todo.completed ? 'completed' : ''}
      >
        <div className="view">
          <input
            className="toggle"
            checked={todo.completed}
            type="checkbox"
            onClick={() => {
              handledUpdate()
            }}
          />
          <label
            onClick={() => {
              handleToggleEdit()
            }}
            aria-hidden="true"
          >
            {todo.name}
          </label>
          <button
            className="destroy"
            onClick={(e: React.SyntheticEvent) => {
              hadledDelete(todo.id, e)
            }}
          ></button>
        </div>
        <input
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
            handleKeyPress(e)
          }}
          onChange={(event) => setValueInput(event.target.value)}
          className="edit"
          placeholder={todo.name}
        />
      </li>
    </form>
  )
}

type AppProsp = {
  todo: Todo
}
