import axios from 'axios';

class SongsService {
    retrieveAllSongs(){
        return axios.get("http://localhost:8082/songs", {headers: {
            "Authorization": "uDkesUkoQ2l2Hq5T"
            }});
    }
}

export default new SongsService();