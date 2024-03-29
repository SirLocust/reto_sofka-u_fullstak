package com.devsirlocust.challenge.todos.repository;

import com.devsirlocust.challenge.todos.entity.Todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

}
