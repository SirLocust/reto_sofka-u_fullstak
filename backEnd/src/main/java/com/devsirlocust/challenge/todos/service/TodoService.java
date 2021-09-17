package com.devsirlocust.challenge.todos.service;

import com.devsirlocust.challenge.todos.entity.Todo;

public interface TodoService {

  public Todo deleteTodo(Long id);

  public Todo setTodo(Todo todo);

  public Todo findByIdTodo(Long id);

}
