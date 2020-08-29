import axios from 'axios';

class SongsService {

    retrieveAllSongs(){
        return axios.get("http://localhost:8082/songs", {headers: {
            "Authorization": "p79QDWK1aCAACj4r"
            }});
    }

    retrieveSingleSong(id){
        return axios.get(`http://localhost:8082/songs/${id}`, {headers: {
                "Authorization": "p79QDWK1aCAACj4r"}})
    }

    deleteSong(id){
        return axios.delete(`http://localhost:8082/songs/${id}`, {headers: {
            "Authorization": "p79QDWK1aCAACj4r"}})
    }

    updateSong(id, song){
        return axios.put(`http://localhost:8082/songs/${id}`, song, {headers: {
                "Authorization": "p79QDWK1aCAACj4r"}})
    }

    createSong(song){
        return axios.post("http://localhost:8082/songs", song, {headers: {
                "Authorization": "p79QDWK1aCAACj4r"}})
    }

}

export default new SongsService();