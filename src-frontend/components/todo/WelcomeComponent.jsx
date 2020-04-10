import React, {Component} from 'react'
import {BrowserRouter as Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'


class WelcomeComponent extends Component{
    

    constructor(props){
        super(props);
        this.state = {
            welcomeMessage : '',
            errorMessage : false
        }
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    }
    render(){
        return (
            <>
      { this.errorMessage && <div className = "alert alert-danger" role = "alert">
              Something went wrong
                
          </div>
    }
        <h1> Welcome ! </h1>
        <div className= "container"> WELCOME {this.props.match.params.name}. <br/> you can manage your list <Link to= "/todos"> here </Link></div>

        <div className="container">
        <button  className= "btn btn-success"  onClick = {this.retriveWelcomeMessage}> Get Welcome Message</button>
            </div>

            <div className = "container">
            {this.state.welcomeMessage}
                </div>
                </>
        );
    }

    retriveWelcomeMessage(){

       HelloWorldService.executeHelloWorldServicePathVar(this.props.match.params.name)
       .then( response => this.handleSuccessfulResponse(response))
       .catch(error => this.handleErrorResponse(error));
    }

    handleSuccessfulResponse(response){
        this.setState({welcomeMessage : response.data.message})
    }
    handleErrorResponse(error){
        console.log(error.response);
        let errorMessage = ''

        //first we are checking what is the error message
        if(error.message) {
            errorMessage+= error.message;
        }
        // then we checking id there's response
        if(error.response && error.response.data){
            errorMessage += error.response.data;
        }


        this.setState({welcomeMessage: errorMessage});
         
    }
    
}


export default WelcomeComponent