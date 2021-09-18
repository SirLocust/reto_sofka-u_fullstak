package com.devsirlocust.challenge.todos.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.devsirlocust.challenge.todos.dto.CategoryTodoDto;
import com.devsirlocust.challenge.todos.dto.mapper.ParseDto;
import com.devsirlocust.challenge.todos.entity.CategoryTodo;
import com.devsirlocust.challenge.todos.repository.CategoryTodoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CategoryTodoServiceImpl implements CategoryTodoService {

  // private final
  private final ParseDto parseDto;
  private final CategoryTodoRepository categoryTodoRepository;

  @Override
  public List<CategoryTodoDto> getAllCategoiresTodos() {
    List<CategoryTodo> categoryTodos = this.categoryTodoRepository.findAll();
    List<CategoryTodoDto> categoryTodoDtos = new ArrayList<>();
    for (CategoryTodo categoryTodo : categoryTodos) {
      categoryTodoDtos.add(parseDto.convertToDto(categoryTodo));
    }

    return categoryTodoDtos;
  }

  @Override
  public CategoryTodoDto setCategoryTodo(CategoryTodo categoryTodo) {

    return parseDto.convertToDto(this.categoryTodoRepository.saveAndFlush(categoryTodo));
  }

  @Override
  public CategoryTodoDto deleCategoryTodo(Long id) {
    CategoryTodo categoryTodoDb = parseDto.convertToEntity(this.findById(id));
    if (categoryTodoDb == null) {
      return null;
    }
    this.categoryTodoRepository.delete(categoryTodoDb);
    return parseDto.convertToDto(categoryTodoDb);
  }

  @Override
  public CategoryTodoDto findById(Long id) {
    Optional<CategoryTodo> categoryTodoD = this.categoryTodoRepository.findById(id);
    return parseDto.convertToDto(categoryTodoD.orElse(null));
  }

}
