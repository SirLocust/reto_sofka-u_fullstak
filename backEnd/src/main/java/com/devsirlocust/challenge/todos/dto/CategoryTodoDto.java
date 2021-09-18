package com.devsirlocust.challenge.todos.dto;

import java.util.List;

import com.devsirlocust.challenge.todos.entity.Todo;

import lombok.Data;

@Data
public class CategoryTodoDto {

  private Long id;

  private String name;

  private List<Todo> todos;
}
