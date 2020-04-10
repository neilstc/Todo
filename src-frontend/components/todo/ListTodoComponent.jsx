
import React, {Component} from 'react'
import {BroweserRouter as Router, Route, Link} from 'react-router-dom';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListTodosComponent extends Component{
    
    constructor(){
        super();
       this.state = {
        todos: [],
        message: null

    };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.createTodo = this.createTodo.bind(this);
}


    render(){ 
       return(
           <div>
               <h1>Todos List</h1>
                 {this.state.message && <div className="alert alert-success"> {this.state.message}</div>}
                <div className= "container">
               <table className= "table">
                <thead>
                    <tr>
                    <th> description </th>
                    <th> is Done </th>
                    <th>Due Date </th>
                    <th>Update</th>
                    <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.todos.map ( todo => 
                    <tr key={todo.id}>
                    <td> {todo.description} </td>
                    <td> {todo.done.toString()} </td>
                    <td> {moment(todo.dueDate).format('YYYY-MM-DD')} </td>
                    <td> <button className = "btn btn-success" onClick = {() => this.updateTodo(todo.id)}> Update</button> </td>
                    <td> <button className = "btn btn-danger" onClick = {() => this.deleteTodo(todo.id) } >Delete </button>  </td>
                    
    
                    
                        </tr>
                        )
                        }
                        </tbody>
                   </table>
                   <div className="row"> 
                   <button className= "btn btn-success" onClick = {this.createTodo}>Create</button>
                   </div>
                   </div>
               </div>
       );
        
    }
    componentDidMount(){
        
        
        if(this.state.id === -1 ) return;
        let username = AuthenticationService.getLoggedInUser()
        TodoDataService.retrieveAllTodos(username).then(
        
            response => { 
            this.setState({
                todos : response.data
            })
            }
        )
    }

    deleteTodo(id){
        let username = AuthenticationService.getLoggedInUser();
        TodoDataService.deleteTodo(username, id).then(
            response => { this.setState({ message: `Seccessfully Deleted Todo ${id}`});
                          this.refreshData();
                        }
        );
    
    }
    updateTodo(id){
        //let username = AuthenticationService.getLoggedInUser();
        console.log('task '+id+' updated')
        this.props.history.push(`/todos/${id}`)

    }

    createTodo(){
        this.props.history.push('/todos/-1')
    }
    refreshData(){
        let username = AuthenticationService.getLoggedInUser()
        TodoDataService.retrieveAllTodos(username).then(
        
            response => { 
            this.setState({
                todos : response.data
            })
            }
        )
    }

}

export default ListTodosComponent;