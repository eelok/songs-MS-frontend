import axios from "axios";
import {URL} from "../constants/url";

class SongTextService {

    retrieveAllSongsTexts(token){
        return axios.get(`${URL}/songText`, {
            headers: {
                "Authorization": token
            }
        });
    }

}

export default new SongTextService();