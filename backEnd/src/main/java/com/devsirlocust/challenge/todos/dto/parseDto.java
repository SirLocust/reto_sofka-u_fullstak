package com.devsirlocust.challenge.todos.dto;

import com.devsirlocust.challenge.todos.entity.CategoryTodo;
import com.devsirlocust.challenge.todos.entity.Todo;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class parseDto {

  private final ModelMapper mapper;

  public CategoryTodoDto convertToDto(CategoryTodo categoryTodo) {
    CategoryTodoDto categoryTodoDTO = mapper.map(categoryTodo, CategoryTodoDto.class);
    return categoryTodoDTO;
  }

  public CategoryTodo convertToEntity(CategoryTodoDto categoryTodoDTO) {
    CategoryTodo categoryTodo = mapper.map(categoryTodoDTO, CategoryTodo.class);
    return categoryTodo;
  }

  public TodoDto convertToDto(Todo todo) {
    TodoDto todoDto = mapper.map(todo, TodoDto.class);
    return todoDto;
  }

  public Todo convertToEntity(TodoDto todoDto) {
    Todo todo = mapper.map(todoDto, Todo.class);
    return todo;
  }
}
