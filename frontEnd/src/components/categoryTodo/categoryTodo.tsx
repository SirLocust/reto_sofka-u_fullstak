import React from 'react'
import { Todo } from '../../interfaces/todo'
import { TodoCategory } from '../../interfaces/todoCategory'

export const CategoryTodo = ({ categoryTodo }: AppProps) => {
  return (
    <div>
      <h1>{categoryTodo.name}</h1>
      <h3>{categoryTodo.id}</h3>
      <div>
        <ol>
          {categoryTodo.todos.map((todo: Todo, index) => {
            return <li key={index}>{todo.name}</li>
          })}
        </ol>
      </div>
    </div>
  )
}

type AppProps = {
  categoryTodo: TodoCategory
}
