// /* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDataAsync } from '../../helpers/FetchDataAsync'
import { Todo } from '../../interfaces/todo'
import { TodoCategory } from '../../interfaces/todoCategory'
import {
  addCategory,
  getCategoryStateSelector,
} from '../../reducers/categoryReducer'
import { FormTodo } from '../forms/formTodo'
import { TodoComponent } from '../todo/todoComponent'

export const CategoryTodo = ({ categoryTodo }: AppProps) => {
  const categoryState = useSelector(getCategoryStateSelector)
  const dispatch = useDispatch()

  const hadledDelete = (id: number) => {
    dispatch(deleteDataAsync(id))
  }

  const handleClik = () => {
    if (categoryState.category.id !== categoryTodo.id) {
      dispatch(addCategory(categoryTodo))
    }
  }

  return (
    <>
      <div onClick={handleClik} aria-hidden="true">
        <section className="todoapp">
          <header className="header">
            <h1>{categoryTodo.name}</h1>

            <FormTodo categoryTodo={categoryTodo} />
          </header>
          <section className="main">
            <ul className="todo-list">
              {categoryTodo.todos?.map((todo: Todo) => {
                return <TodoComponent key={todo.id} todo={todo} />
              })}
            </ul>
          </section>
          <footer className="footer">
            <button
              className="clear-completed"
              onClick={() => hadledDelete(categoryTodo.id)}
            >
              Delete
            </button>
          </footer>
        </section>
      </div>
    </>
  )
}

type AppProps = {
  categoryTodo: TodoCategory
}
