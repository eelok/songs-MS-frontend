// import React, {Component} from "react";
// import SongsService from "../../service/SongsService";
// import StorageSessionService from "../../service/StorageSessionService";
//
//
// export class AddSongToSongList extends Component{
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             songs: []
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <label htmlFor="pet-select">Choose a song:</label>
//                 <select name="pets" id="pet-select">
//                     <option value="">--Please choose an option--</option>
//                     {this.state.songs.map(
//                         song =>
//                             <option value={song.name}>opt</option>
//                     )}
//                 </select>
//             </div>
//         )
//     }
//
//     componentDidMount() {
//         const token = StorageSessionService.getToken();
//         SongsService.retrieveAllSongs(token)
//             .then((response) => {
//                 this.setState({
//                     songs: response.data
//                 })
//             })
//     }
// }