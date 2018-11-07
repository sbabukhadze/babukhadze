import React from "react";

export default class Search extends React.Component {
  render() {
    return (
      <div className="input">
        <form action="" method="post">
          <input type="text" placeholder="Search Text" />
          <button>OK</button>
        </form>
      </div>
    );
  }
}
