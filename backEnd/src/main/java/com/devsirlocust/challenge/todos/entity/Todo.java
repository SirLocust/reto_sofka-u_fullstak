package com.devsirlocust.challenge.todos.entity;

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
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.springframework.lang.NonNull;

import lombok.Data;

@Entity
@Table(name = "TODOSS")
@Data
public class Todo {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  // @Column(name = "TODO_ID")
  private Long id;
  // @Column(name = "NAME")
  private String name;
  // @Column(name = "COMPLETED")

  private Boolean completed;

  // @JoinColumn(name = "CATEGORY_ID")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long categoryTodoId;
}
