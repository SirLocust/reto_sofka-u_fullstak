package com.devsirlocust.challenge.todos.controller;

import java.util.HashMap;

import java.util.Map;

import com.devsirlocust.challenge.todos.entity.Todo;
import com.devsirlocust.challenge.todos.service.TodoService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController()
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping(value = "api/todo")
@AllArgsConstructor
public class TodoContoller {

  private final TodoService todoService;

  // @GetMapping
  // public ResponseEntity<Map<String, Object>> listCategoryTodos() {
  // List<CategoryTodo> categoryTodosDb =
  // this.todoService.getAllCategoiresTodos();
  // Map<String, Object> body = new HashMap<>();
  // body.put("data", categoryTodosDb);
  // body.put("message", "Category todo generada con exito");
  // body.put("errors", null);
  // return ResponseEntity.ok(body);
  // }

  @PostMapping()
  public ResponseEntity<Map<String, Object>> createTodo(@RequestBody Todo todo) {
    Todo todoDb = this.todoService.setTodo(todo);
    Map<String, Object> body = new HashMap<>();
    body.put("data", todoDb);
    body.put("message", "Categoria creado con exito");
    body.put("errors", null);
    return ResponseEntity.status(HttpStatus.CREATED).body(body);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Map<String, Object>> deleteCategoryTodo(@PathVariable("id") Long id) {
    Todo todoDb = this.todoService.deleteTodo(id);
    Map<String, Object> body = new HashMap<>();

    if (todoDb == null) {
      body.put("message", "Category No Eliminada");
      body.put("errors", "category no existe");
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body);
    }
    body.put("data", todoDb);
    body.put("message", "Category Eliminada con exito");
    body.put("errors", null);
    return ResponseEntity.status(HttpStatus.OK).body(body);

  }

}
