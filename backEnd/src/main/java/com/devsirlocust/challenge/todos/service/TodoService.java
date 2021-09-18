package com.devsirlocust.challenge.todos.service;

import com.devsirlocust.challenge.todos.dto.TodoDto;
import com.devsirlocust.challenge.todos.entity.Todo;

public interface TodoService {

  public TodoDto deleteTodo(Long id);

  public TodoDto setTodo(Todo todo);

  public TodoDto findByIdTodo(Long id);

}
