import React, {Component} from "react";

class SingleSongComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
        }
    }

    render() {
        return(<div>
            <h1>Song</h1>
        </div>)
    }
}
export default SingleSongComponent;