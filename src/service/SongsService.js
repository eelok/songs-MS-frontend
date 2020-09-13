import axios from 'axios';
import {URL} from "../constants/url";

class SongsService {

    retrieveAllSongs(token) {
        return axios.get(`${URL}/songs`, {
            headers: {
                "Authorization": token
            }
        });
    }

    retrieveSingleSong(token, id) {
        return axios.get(`${URL}/songs/${id}`, {
            headers: {
                "Authorization": token
            }
        })
    }

    deleteSong(token, id) {
        return axios.delete(`${URL}/songs/${id}`, {
            headers: {
                "Authorization": token
            }
        })
    }

    updateSong(token, id, song) {
        return axios.put(`${URL}/songs/${id}`, song, {
            headers: {
                "Authorization": token
            }
        })
    }

    createSong(token, song) {
        return axios.post(`${URL}/songs`, song, {
            headers: {
                "Authorization": token
            }
        })
    }

}

export default new SongsService();