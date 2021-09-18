package com.devsirlocust.challenge.todos.dto.mapper;

import com.devsirlocust.challenge.todos.dto.CategoryTodoDto;
import com.devsirlocust.challenge.todos.entity.CategoryTodo;
import com.devsirlocust.challenge.todos.entity.Todo;
import com.devsirlocust.challenge.todos.dto.*;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;

@Component

public class ParseDto {
  @Autowired
  private ModelMapper mapper;

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
