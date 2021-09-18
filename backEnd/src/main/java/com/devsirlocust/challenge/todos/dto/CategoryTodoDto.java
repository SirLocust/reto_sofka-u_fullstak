package com.devsirlocust.challenge.todos.dto;

import java.util.List;

import com.devsirlocust.challenge.todos.entity.Todo;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CategoryTodoDto {

  private Long id;

  private String name;

  private List<Todo> todos;
}
