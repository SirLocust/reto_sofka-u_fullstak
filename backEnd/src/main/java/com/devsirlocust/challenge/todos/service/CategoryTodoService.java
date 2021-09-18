package com.devsirlocust.challenge.todos.service;

import java.util.List;

import com.devsirlocust.challenge.todos.dto.CategoryTodoDto;
import com.devsirlocust.challenge.todos.entity.CategoryTodo;

public interface CategoryTodoService {

  public List<CategoryTodoDto> getAllCategoiresTodos();

  public CategoryTodoDto setCategoryTodo(CategoryTodo categoryTodo);

  public CategoryTodoDto deleCategoryTodo(Long id);

  public CategoryTodoDto findById(Long id);
}
