import axios from 'axios';

class SongsService {

    retrieveAllSongs(){
        return axios.get("http://localhost:8082/songs", {headers: {
            "Authorization": "vI9mau8Lh7HFI0zi"
            }});
    }

    deleteSong(id){
        return axios.delete(`http://localhost:8082/songs/${id}`, {headers: {
            "Authorization": "vI9mau8Lh7HFI0zi"}})
    }
}

export default new SongsService();