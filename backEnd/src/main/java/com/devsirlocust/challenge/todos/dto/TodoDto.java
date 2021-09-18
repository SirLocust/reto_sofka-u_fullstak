package com.devsirlocust.challenge.todos.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TodoDto {

  private Long id;

  private String name;

  private Boolean completed;

  private Long categoryTodoId;

}
