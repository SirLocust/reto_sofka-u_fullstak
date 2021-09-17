package com.devsirlocust.challenge.todos.service;

import java.util.List;

import com.devsirlocust.challenge.todos.entity.CategoryTodo;

public interface CategoryTodoService {

  public List<CategoryTodo> getAllCategoiresTodos();

  public CategoryTodo setCategoryTodo(CategoryTodo categoryTodo);

  public CategoryTodo deleCategoryTodo(Long id);

  public CategoryTodo findById(Long id);
}
