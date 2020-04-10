import React, {Component} from 'react';
import {Route, Redirect}  from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';
 

class AthenticatedRoute extends Component{

    render(){

        
        if(AuthenticationService.isUserLogged()){
            
           return <Route {...this.props} />
    }else{
        return <Redirect to= "/login"/>
    }
        
}

}

export default  AthenticatedRoute;