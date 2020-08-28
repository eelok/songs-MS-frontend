import React, {Component} from "react";
import {Form, Formik, Field} from 'formik';
import SongsService from "../service/SongsService";

class SingleSongComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            id: this.props.match.params.id,
            title: '',
            artist: '',
            label: '',
            released: ''
        }
    }

    render() {
        let title = this.state.title;
        let artist = this.state.artist;
        let label = this.state.label;
        let released = this.state.released;

        return (
            <div>
                <h1>Song</h1>
                <Formik initialValues={{
                    title: title,
                    artist: artist,
                    label: label,
                    released: released
                }}
                        enableReinitialize={true}
                >
                    <div>
                        <Form>
                            <fieldset>
                                <label>Title</label>
                                <Field type="text" name="title"/>
                            </fieldset>
                            <fieldset>
                                <label>Artist</label>
                                <Field type="text" name="artist"/>
                            </fieldset>
                            <fieldset>
                                <label>Label</label>
                                <Field type="text" name="label"/>
                            </fieldset>
                            <fieldset>
                                <label>Released</label>
                                <Field type="number" name="released"/>
                            </fieldset>
                            <button>Save</button>
                        </Form>
                    </div>

                </Formik>

            </div>
        )
    }

    componentDidMount() {
        SongsService.retrieveSingleSong(this.state.id)
            .then(response => {
                    this.setState({
                        title: response.data.title,
                        artist: response.data.artist,
                        label: response.data.label,
                        released: response.data.label
                    })
                }
            )
    }
}

export default SingleSongComponent;