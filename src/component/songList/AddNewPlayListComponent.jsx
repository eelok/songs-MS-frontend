import React, {Component} from "react";
import StorageSessionService from "../../service/StorageSessionService";
import "../../css/buttons.css"


export class AddNewPlayListComponent extends Component{

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            ownerId: StorageSessionService.getUserId(),
            isPrivate: false,
            listOfSongs: []
        }
    }

    render() {
        return (
            <div>
                <form action="">
                    <h1>Your new Playlist</h1>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title"/>
                    </div>
                    <div>
                        <h4>Visibility</h4>
                        <label htmlFor="public">Public</label>
                        <input type="checkbox" name="public" id="public"/>
                        <label htmlFor="private">Public</label>
                        <input type="checkbox" name="private" id="private"/>
                    </div>
                    <div>
                        <label htmlFor="songs-selector">Songs:</label>
                        <select name="songs-selector" id="songs-selector">
                            <option value="">Please choose songs</option>
                            <option value="song">Song1</option>
                        </select>
                    </div>
                    <div>
                        <button className="save-btn">Save</button>
                    </div>
                </form>
            </div>
        )
    }

}