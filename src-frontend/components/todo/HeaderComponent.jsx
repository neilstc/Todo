import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { withRouter } from "react-router";

class HeaderComponent extends Component{

    render(){
        const isUserLoggedIn = AuthenticationService.isUserLogged();

        return(
 
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                <div href = "http://in28minutes.com " className= "navbar-brand"> in28minutes </div> 
                   <ul className = "navbar-nav">
                    {  isUserLoggedIn && <li > <Link className ="nav-link" to = "/welcome/in28minutes"> Home </Link></li>}
                    {  isUserLoggedIn && <li ><Link className="nav-link" to= "/todos">Todos </Link></li> }
                       </ul>
                       <ul className = "navbar-nav navbar-collapse justify-content-end">
                    {    !isUserLoggedIn && <li ><Link  className= "nav-link"  to="/login"> Login</Link></li>}
                    {    isUserLoggedIn && <li ><Link className= "nav-link" to="/logout" onClick= {AuthenticationService.registerLogout}>Logout</Link></li>}
                            </ul>
                    </nav>
                </header>
        );

    }

}
export default withRouter(HeaderComponent)