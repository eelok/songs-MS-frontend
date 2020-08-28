import axios from 'axios';

class SongsService {

    retrieveAllSongs(){
        return axios.get("http://localhost:8082/songs", {headers: {
            "Authorization": "xY5l1RKbjNRp9yKM"
            }});
    }

    deleteSong(id){
        return axios.delete(`http://localhost:8082/songs/${id}`, {headers: {
            "Authorization": "xY5l1RKbjNRp9yKM"}})
    }
}

export default new SongsService();