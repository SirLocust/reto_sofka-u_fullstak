import { Todo } from './todo'

export interface TodoCategory {
  id?: number
  name: string
  todos: Todo[]
}
