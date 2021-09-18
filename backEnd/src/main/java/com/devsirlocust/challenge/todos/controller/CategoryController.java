package com.devsirlocust.challenge.todos.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.devsirlocust.challenge.todos.dto.CategoryTodoDto;
import com.devsirlocust.challenge.todos.entity.CategoryTodo;
import com.devsirlocust.challenge.todos.service.CategoryTodoService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController()
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping(value = "api/categories")
@AllArgsConstructor
public class CategoryController {

  private final CategoryTodoService categoryTodoService;

  @GetMapping
  public ResponseEntity<Map<String, Object>> listCategoryTodos() {
    List<CategoryTodoDto> categoryTodosDb = this.categoryTodoService.getAllCategoiresTodos();
    Map<String, Object> body = new HashMap<>();
    body.put("data", categoryTodosDb);
    body.put("message", "Category todo  generada con exito");
    body.put("errors", null);
    return ResponseEntity.ok(body);
  }

  @PostMapping()
  public ResponseEntity<Map<String, Object>> createCategoryTodo(@RequestBody CategoryTodo categoryTodo) {
    CategoryTodoDto categoryTodoCreate = this.categoryTodoService.setCategoryTodo(categoryTodo);
    Map<String, Object> body = new HashMap<>();
    body.put("data", categoryTodoCreate);
    body.put("message", "Categoria creado con exito");
    body.put("errors", null);
    return ResponseEntity.status(HttpStatus.CREATED).body(body);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Map<String, Object>> deleteCategoryTodo(@PathVariable("id") Long id) {
    CategoryTodoDto categoryTodoDb = this.categoryTodoService.deleCategoryTodo(id);
    Map<String, Object> body = new HashMap<>();
    body.put("data", categoryTodoDb);
    if (categoryTodoDb == null) {
      body.put("message", "Category No Eliminada");
      body.put("errors", "category no existe");
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body);
    }
    body.put("message", "Category Eliminada con exito");
    body.put("errors", null);
    return ResponseEntity.status(HttpStatus.OK).body(body);

  }

}
