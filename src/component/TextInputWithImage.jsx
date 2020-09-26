import React from "react";
import {TextInput} from "./TextInput";

export class TextInputWithImage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            imageUrl: ''
        }
    }
    render() {
        const {imageUrl} = this.state;
        return(
            <>
                <TextInput {...this.props} onChange={this.handleOnChangeImageUrl}/>
                <div className="form-control">
                    {
                        imageUrl ?
                            <>
                            <span>Image: </span>
                            <img src={this.state.imageUrl} alt="cover"/>
                            </>
                        :
                        null
                    }
                </div>
            </>
        )
    }

    handleOnChangeImageUrl = (e) =>{
        this.setState({
            imageUrl: e.target.value
        })
        console.log(e.target.value)
    }
}