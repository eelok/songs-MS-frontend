import axios from 'axios';

class SongListService {

    retrieveAllSongLists(token, userId){
        return axios.get(`http://localhost:8082/songLists?userId=${userId}`, {headers: {
                "Authorization": token
            }});
    }

    retrieveSingleSongList(token, songListId){
        return axios.get(`http://localhost:8082/songLists/${songListId}`, {headers: {
                "Authorization": token
        }});
    }


}
export default new SongListService();