package com.todoapp.restfulwebservices;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// first parameter is which entity the class manage, the later is primary key
@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long> {
	
	// find all todos by username 
	List<Todo> findByUsername(String username);
		
		
		
		
		
		
	
	
	

}
