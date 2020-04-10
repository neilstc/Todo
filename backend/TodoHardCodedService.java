package com.todoapp.restfulwebservices;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;


@Service
public class TodoHardCodedService {



	private static List<Todo> todos = new ArrayList<>();
	private static long todoCounter = 0;

	static {
		todos.add(new Todo(++todoCounter,"in28minutes","watch parks & recreation", false,new Date()));
		todos.add(new Todo(++todoCounter,"in28minutes","watch the office again", false,new Date()));
		todos.add(new Todo(++todoCounter,"in28minutes","finish dark souls 3 DLC", false,new Date()));

	}

	public List<Todo> findAll(){

		return todos;
	}

	public  Todo deleteTodo(@PathVariable long id) {
		Todo delTodo = findTodoById(id);

		if(todos.remove(delTodo)) {
			return delTodo;
		}
		return null;
	}
	
	public Todo findTodoById(long id){

		for(Todo todo: todos) {
			if(todo.getId() == id) {
				return todo;
			}			
		}
		return null;

	}

	public Todo deleteTodoById(long id) {
		
		Todo todo = findTodoById(id);
		
		if(todos.remove(todo)){
			return todo;
		}else{
			return null;
		}
	}
	
	public Todo saveTodo(Todo todo) {
	
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++todoCounter);
			todos.add(todo);
		}else {
				deleteTodoById(todo.getId());
				todos.add(todo);
				
		}
		return todo;
	}
	


}
	
	
	
