import React from "react";

export default class Search extends React.Component {
  render() {
    return (
      <div className="input">
        <form action="" method="get">
          <input 
          type="text" 
          placeholder="Search Text"
          name="searchText"
          // onChange={ (e) => {
          //   this.props.onSearchHandler(e)
          // } }
           />
          <button>OK</button>
        </form>
      </div>
    );
  }
}
