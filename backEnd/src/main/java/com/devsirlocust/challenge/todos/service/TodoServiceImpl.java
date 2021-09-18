package com.devsirlocust.challenge.todos.service;

import java.util.Optional;

import com.devsirlocust.challenge.todos.dto.TodoDto;
import com.devsirlocust.challenge.todos.dto.mapper.ParseDto;

import com.devsirlocust.challenge.todos.entity.Todo;
import com.devsirlocust.challenge.todos.repository.TodoRepository;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TodoServiceImpl implements TodoService {
  private final ParseDto parseDto;
  private final TodoRepository todoRepository;

  @Override
  public TodoDto deleteTodo(Long id) {
    Todo todoDb = parseDto.convertToEntity(this.findByIdTodo(id));
    if (todoDb == null) {

      return null;
    }
    this.todoRepository.delete(todoDb);
    return parseDto.convertToDto(todoDb);
  }

  @Override
  public TodoDto setTodo(Todo todo) {

    return parseDto.convertToDto(this.todoRepository.save(todo));
  }

  @Override
  public TodoDto findByIdTodo(Long id) {
    Optional<Todo> todoDb = todoRepository.findById(id);
    return parseDto.convertToDto(todoDb.orElse(null));
  }

}
