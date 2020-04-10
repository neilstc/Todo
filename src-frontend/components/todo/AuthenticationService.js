import axios from 'axios'
import {API_URL} from '../../Constants.js'


export const USER_NAME_SESSION_ATTR_NAME = 'authenticatedUser'


class AuthenticationService {


    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`,
            {headers: {authorization: this.createAuthToken(username, password)}})
   }
   

   executeJwtAuthenticationService(username, password) {
    return axios.post(`${API_URL}/authenticate`,
        {
            username,
            password

        })
}


    createAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password);

    }




    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTR_NAME, username);
        this.setupAxiosInterceptors(username, password);
    }



    registerSuccessfulLoginJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTR_NAME, username);
        this.setupAxiosInterceptors(this.createJwtToken(token));
    } 


    registerLogout(username) {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTR_NAME);
    }

    isUserLogged() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTR_NAME);
        if (user === null) {
            return false;
        }
        return true;

    }

    getLoggedInUser() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTR_NAME);
        if (user === null) {
            return null
        }
        else {
            return user;
        }
    }

    createJwtToken(token){

        return 'Bearer ' + token;

    }
    setupAxiosInterceptors(token) {
        //console.log(BasicAuthHeader.toString())
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLogged) {
                    config.headers.authorization = token
                }
                return config;
            }

        );
 
    }
}
export default new AuthenticationService();