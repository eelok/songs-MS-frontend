import axios from 'axios';
import {URL} from "../constants/url";

class SongListService {

    retrieveAllSongLists(token, userId) {
        return axios.get(`${URL}/songLists?userId=${userId}`, {
            headers: {
                "Authorization": token
            }
        });
    }

    retrieveSingleSongList(token, songListId) {
        return axios.get(`${URL}/songLists/${songListId}`, {
            headers: {
                "Authorization": token
            }
        });
    }

    deleteSongList(token, songListId) {
        return axios.delete(`${URL}/songLists/${songListId}`, {
            headers: {
                "Authorization": token
            }
        });
    }

    createNewSongList(token, songList) {
        return axios.post(`${URL}/songLists/`, songList, {
            headers: {
                "Authorization": token
            }
        });
    }

}

export default new SongListService();