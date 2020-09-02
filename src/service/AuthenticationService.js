import axios from 'axios';

class AuthenticationService {


    ///todo delete
    getUserId(token){
        return axios.get(`http://localhost:8081/rest/userByToken/${token}`);
    }

    authenticate(user) {
        return axios.post("http://localhost:8081/rest/auth/", user)
    }




}

export default new AuthenticationService();