import React, {Component} from "react";

class List extends Component {
    render(){
        return(
       <div className="list_container">
            <div className="header">
                <form onSubmit={this.props.addItem}>
                    <input
                    ref={this.props.itemInput}
                    onChange={this.props.handleInput}
                    value={this.props.currentItem.text}

                    />
                    <button type="submit">Add Item</button>

                </form>

            </div>


       </div>
             )
    }
}


export default List;
