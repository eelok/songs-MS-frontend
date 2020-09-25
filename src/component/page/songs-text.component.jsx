import React from "react";
import StorageSessionService from "../../service/StorageSessionService";
import SongTextService from "../../service/SongTextService";


class SongsTexts extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            songsTexts: []
        }
    }

    render() {
        return (
            <div>
                <h1>Lyrics</h1>
                <div>
                    {this.state.songsTexts.map(songText => (
                        <li key={songText.id}>{songText.text}</li>
                    ))}
                </div>
            </div>

        )
    }

    componentDidMount() {
        let token = StorageSessionService.getToken();
        SongTextService.retrieveAllSongsTexts(token)
            .then(response =>{
                this.setState({
                    songsTexts: response.data
                });
                console.log(response.data)
            })
    }
}

export default SongsTexts;