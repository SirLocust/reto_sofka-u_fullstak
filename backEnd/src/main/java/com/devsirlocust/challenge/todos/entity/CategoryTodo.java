package com.devsirlocust.challenge.todos.entity;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.springframework.web.servlet.FlashMap;

import lombok.Data;

@Entity
@Table(name = "CATEGORIES_TODOS")
@Data
public class CategoryTodo {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  // @Column(name = "CATEGORY_ID")
  private Long id;

  @Column(name = "NAME")

  private String name;

  @OneToMany(targetEntity = Todo.class, fetch = FetchType.EAGER)
  @JoinColumn(name = "categoryTodoId", referencedColumnName = "id")
  @Cascade(org.hibernate.annotations.CascadeType.ALL)
  private List<Todo> todos;

}
