package com.todoapp.restfulwebservices.helloWorld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
//Controller
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {
	//GET 
	//URI - /Hello-world
	//Method - "Hello World"
	//@RequestMapping(method = RequestMethod.GET, path = "/hello-world")
	@GetMapping(path = "/hello-world") 
	
	public String HelloWorld() {
		
		return "Hello World mofo";
	}
	
	@GetMapping(path = "hello-world-bean")
	
	public HelloWorldBean helloWorldBean() {
		
		return new HelloWorldBean("Hello World");
	}
	
	@GetMapping(path = "/hello-world/path-variable/{username}")
	public HelloWorldBean helloWorldBean(@PathVariable String username) {		
		return new HelloWorldBean(String.format("hello world %s",username));		
	}
	

}
