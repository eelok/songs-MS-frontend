import axios from 'axios';

class SongsService {

    retrieveAllSongs(token){
        return axios.get("http://localhost:8082/songs", {headers: {
            "Authorization": token
            }});
    }

    retrieveSingleSong(token, id){
        return axios.get(`http://localhost:8082/songs/${id}`, {headers: {
                "Authorization": token}})
    }

    deleteSong(token, id){
        return axios.delete(`http://localhost:8082/songs/${id}`, {headers: {
            "Authorization": token}})
    }

    updateSong(token, id, song){
        return axios.put(`http://localhost:8082/songs/${id}`, song, {headers: {
                "Authorization": token}})
    }

    createSong(token, song){
        return axios.post("http://localhost:8082/songs", song, {headers: {
                "Authorization": token}})
    }

}

export default new SongsService();