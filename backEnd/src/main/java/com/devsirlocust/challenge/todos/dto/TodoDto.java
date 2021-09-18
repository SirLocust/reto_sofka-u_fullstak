package com.devsirlocust.challenge.todos.dto;


import lombok.Data;


@Data
public class TodoDto {

  private Long id;

  private String name;

  private Boolean completed;

  private Long categoryTodoId;

}
