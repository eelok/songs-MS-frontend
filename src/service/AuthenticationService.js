import axios from 'axios';
import {URL} from "../constants/url";

class AuthenticationService {

    authenticate(user) {
        return axios.post(`${URL}/rest/auth/`, user)
    }




}

export default new AuthenticationService();