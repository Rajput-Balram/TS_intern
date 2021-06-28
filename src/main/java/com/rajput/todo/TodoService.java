package com.rajput.todo;

import java.util.ArrayList;
import java.util.List;

public class TodoService {
	private static List<Todo> todos = new ArrayList<>();
	static {
		todos.add(new Todo("Learn Web Application Development","study"));
		todos.add(new Todo("Learn Spring MVC", "study"));
		todos.add(new Todo("Learn Spring Rest Services", "study"));

	}
	public List<Todo> retriveTodos(){
		return todos;
	}
	public void addTodo(Todo todo) {
		todos.add(todo);
	}
	
	public void deleteTodo(Todo todo) {
		todos.remove(todo);
	}
 }
