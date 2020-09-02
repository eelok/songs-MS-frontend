import React, {Component} from "react";
import {Link} from 'react-router-dom';
import SongListService from "../../service/SongListService";
import StorageSessionService from "../../service/StorageSessionService";

export class AllSongListsComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            songLists: []
        }

    }

    render() {
        return (
            <div><h1>All Play Lists</h1>
                <div>
                    <div>
                        <div>
                            {this.state.songLists.map(
                                songList =>
                                    <div key={songList.id}>
                                        <h4>Name:</h4>
                                        {songList.name}
                                        <h4>Owner</h4>
                                        {songList.ownerId}
                                        <h4>Public:</h4>
                                        {songList.isPrivate.toString()}
                                        <div>
                                            <Link to={`/songslists/${songList.id}`}>show content</Link>
                                        </div>
                                    </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let token = StorageSessionService.getToken();
        let userId = StorageSessionService.getUserId();

        SongListService.retrieveAllSongLists(token, userId)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    songLists: response.data
                })
            })
    }

    // showContentClicked(id){
    //     this.props.history.push(`/songslists/${id}`)
    // }
}