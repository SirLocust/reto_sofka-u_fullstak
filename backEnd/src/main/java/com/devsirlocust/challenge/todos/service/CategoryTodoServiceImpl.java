package com.devsirlocust.challenge.todos.service;

import java.util.List;
import java.util.Optional;

import com.devsirlocust.challenge.todos.entity.CategoryTodo;
import com.devsirlocust.challenge.todos.repository.CategoryTodoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
// @AllArgsConstructor
public class CategoryTodoServiceImpl implements CategoryTodoService {

  // private final
  @Autowired
  CategoryTodoRepository categoryTodoRepository;

  @Override
  public List<CategoryTodo> getAllCategoiresTodos() {

    return this.categoryTodoRepository.findAll();
  }

  @Override
  public CategoryTodo setCategoryTodo(CategoryTodo categoryTodo) {

    return this.categoryTodoRepository.saveAndFlush(categoryTodo);
  }

  @Override
  public CategoryTodo deleCategoryTodo(Long id) {
    CategoryTodo categoryTodoDb = this.findById(id);
    if (categoryTodoDb == null) {
      return null;
    }
    this.categoryTodoRepository.delete(categoryTodoDb);
    return categoryTodoDb;
  }

  @Override
  public CategoryTodo findById(Long id) {
    Optional<CategoryTodo> categoryTodoD = this.categoryTodoRepository.findById(id);
    return categoryTodoD.orElse(null);
  }

}
