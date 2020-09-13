import axios from 'axios';
import {URL} from "../constants/url";

class AuthenticationService {


    ///todo delete
    getUserId(token){
        return axios.get(`${URL}/userByToken/${token}`);
    }

    authenticate(user) {
        return axios.post(`${URL}/rest/auth/`, user)
    }




}

export default new AuthenticationService();