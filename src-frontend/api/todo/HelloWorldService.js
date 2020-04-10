

import axios from 'axios';
import {API_URL} from '../../Constants.js'

class HelloWorldService {

    executeHelloWorldService() {
        console.log("executed"); 
        return axios.get(`API_URL/hello-world-bean`)
    }

    executeHelloWorldServicePathVar(username) {

        return axios.get(`${API_URL}/hello-world/path-variable/${username}`);
    }

} export default new HelloWorldService();