
import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js' 




class LoginComponent extends Component{


    constructor(props){
        super(props);
        
        this.state = {
            username :'neil',
            password : '', 
            hasLoginFaild: false,
            showSuccessMessage: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this); 

    }
    handleChange(event){
            console.log(event.target.name);

        this.setState(
            {
                [event.target.name] : event.target.value

            }


        );

    }

    loginClicked(event){
            
            AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginJwt(this.state.username, response.data.token) 
                this.props.history.push(`/welcome/${this.state.username}`)
                }).catch ( () =>{
                    this.setState({showSuccessMessage: false})
                    this.setState({hasLoginFaild: true})
    
                })
    }
  
    render(){
            return (

                <div >
                    <h1> Login </h1>
                    <div className= "container">
                       {/* <ShowIvalidCredentials hasLoginFaild = {this.state.hasLoginFaild}/>
                        <ShowValidCredentials showSuccessMessage = {this.state.showSuccessMessage}/> */}
                        {this.state.hasLoginFaild && <div className="alert alert-warning"> invalid credemtials </div>}
                        {this.state.showSuccessMessage && <div> Successful Login</div>}
                        User Name: <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange} />
                        Password:    <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange}/>
                            <button className= "btn btn-success" onClick = {this.loginClicked}>Login</button>
                        </div>
                     
                        </div>
            );
    
    }

}

export default LoginComponent;