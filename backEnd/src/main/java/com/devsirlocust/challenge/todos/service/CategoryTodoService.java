package com.devsirlocust.challenge.todos.service;

import java.util.List;

import com.devsirlocust.challenge.todos.dto.CategoryTodoDto;
import com.devsirlocust.challenge.todos.entity.CategoryTodo;

public interface CategoryTodoService {

  public List<CategoryTodoDto> getAllCategoiresTodos();

  public CategoryTodo setCategoryTodo(CategoryTodo categoryTodo);

  public CategoryTodo deleCategoryTodo(Long id);

  public CategoryTodo findById(Long id);
}
