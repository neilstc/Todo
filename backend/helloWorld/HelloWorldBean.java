package com.todoapp.restfulwebservices.helloWorld;

public class HelloWorldBean {
	
	private String message;
	
	
	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	HelloWorldBean(String message){
		
		this.message = message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}

}
