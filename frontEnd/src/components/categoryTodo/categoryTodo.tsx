// /* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteDataAsync } from '../../helpers/FetchDataAsync'
import { Todo } from '../../interfaces/todo'
import { TodoCategory } from '../../interfaces/todoCategory'
import { FormTodo } from '../forms/formTodo'
import { TodoComponent } from '../todo/todoComponent'

export const CategoryTodo = ({ categoryTodo }: AppProps) => {
  const dispatch = useDispatch()

  const hadledDelete = (id: number) => {
    // console.log('s')
    dispatch(deleteDataAsync(id))
  }

  return (
    <>
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>{categoryTodo.name}</h1>
            <button onClick={() => hadledDelete(categoryTodo.id)}>X</button>
            <FormTodo categoryTodo={categoryTodo} />
          </header>
          <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              {categoryTodo.todos?.map((todo: Todo) => {
                return <TodoComponent key={todo.id} todo={todo} />
              })}
            </ul>
          </section>
          <footer className="footer">
            <span className="todo-count">
              <strong>0</strong> item left
            </span>
            <ul className="filters">
              <li>
                <a className="selected" href="#/">
                  All
                </a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Completed</a>
              </li>
            </ul>

            <button className="clear-completed">Clear completed</button>
          </footer>
        </section>
      </div>
    </>
  )
}

type AppProps = {
  categoryTodo: TodoCategory
}
