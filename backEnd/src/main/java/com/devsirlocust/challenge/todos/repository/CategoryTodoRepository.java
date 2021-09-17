package com.devsirlocust.challenge.todos.repository;

import com.devsirlocust.challenge.todos.entity.CategoryTodo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryTodoRepository extends JpaRepository<CategoryTodo, Long> {

}
