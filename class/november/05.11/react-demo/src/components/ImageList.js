import React, {Component} from 'react';
import {fetchData} from '../configs/functions';

class ImageList extends Component {
    state = {
        data: null,
        url: this.props.url
      }

    componentDidMount(){
        fetchData(this.props.url).then( (data) => {
            this.setState({data}) 
        } )
    }
    render(){
        return (
            <div>
                { this.state.data && <p>MM</p>}
            </div>
        )
    }  

}

export default ImageList