package com.devsirlocust.challenge.todos.service;

import java.util.Optional;

import com.devsirlocust.challenge.todos.entity.Todo;
import com.devsirlocust.challenge.todos.repository.TodoRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class TodoServiceImpl implements TodoService {

  private final TodoRepository todoRepository;

  @Override
  public Todo deleteTodo(Long id) {
    Todo todoDb = this.findByIdTodo(id);
    if (todoDb == null) {

      return null;
    }
    this.todoRepository.delete(todoDb);
    return todoDb;
  }

  @Override
  public Todo setTodo(Todo todo) {

    return this.todoRepository.save(todo);
  }

  @Override
  public Todo findByIdTodo(Long id) {
    Optional<Todo> todoDb = todoRepository.findById(id);
    return todoDb.orElse(null);
  }

}
