import React, {Component} from 'react';
import SongsService from "../service/SongsService";




class SongsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            songs: []

        }
    }
    render() {
        return(
            <div>
                <h1>List of Songs</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Label</th>
                            <th>Released</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.songs.map(
                            song =>
                                <tr key={song.id}>
                                    <td>{song.title}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.label}</td>
                                    <td>{song.released}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    componentDidMount() {
        SongsService.retrieveAllSongs()
            .then(response => {
                this.setState({
                    songs: response.data
                })
            })
    }
}
export default SongsComponent;

