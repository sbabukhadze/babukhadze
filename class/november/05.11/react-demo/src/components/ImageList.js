import React from "react";
import { fetchData } from "../configs"

class ImageList extends Component {
    // constructor(props) {

    // }
    state = {
        data: null,
        url: this.props.url
    }
    componentDidMount() {
        this.setState(fetchData(this.state))       
    }
    render() {
        return (
            <div>
                {this.state.data&&<p>MM</p>}
            </div>
        )


    }

}


export default ImageList