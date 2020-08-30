import axios from 'axios';

class AuthenticationService {

    getToken() {
        return sessionStorage.getItem('userToken');
    }

    allocateTokenToUser(user) {
        return axios.post("http://localhost:8081/rest/auth/", user)
    }

    logout(){
        sessionStorage.removeItem('userToken');
    }


}

export default new AuthenticationService();