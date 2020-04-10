import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodoComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import TodoComponent from './TodoComponent';


class TodoAoo extends Component{

    render(){
            return(
                <div className = "TodoApp">
                    <Router>
                        
                    <HeaderComponent/>
                        <Switch>
                        <Route path = "/" exact component =  {LoginComponent}/>
                        <Route path = "/login" component =  {LoginComponent}/>
                        <AuthenticatedRoute path = "/welcome/:name" component= {WelcomeComponent}/>
                        <AuthenticatedRoute path = "/todos" exact  component = {ListTodosComponent}/>
                        <AuthenticatedRoute path = "/logout" component= {LogoutComponent}/>
                        <AuthenticatedRoute path = "/todos/:id" component={TodoComponent}/>
                        <Route component = {ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                        
                        
                    </Router>
                    {/* <LoginComponent/>
                    <WelcomeComponent/> */}
                    </div>

            );


    }
}





export default TodoAoo;



