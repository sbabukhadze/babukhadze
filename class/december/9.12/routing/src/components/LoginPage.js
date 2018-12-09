import React from "react";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.OnSubmitHandler = this.OnSubmitHandler.bind(this);
    this.username = React.createRef();
  }

  OnSubmitHandler(event) {
    event.preventDefault();
    console.log(this.username.current.value);
    this.login();
  }

  login = () => {
    fetch("http://localhost:5000/login")
      .then(res => res.json())
      .then(user => {
        console.log(user);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <form className="form form-login">
        <div className="input--group">
          <label>
            Username:
            <br />
            <input
              type="text"
              placeholder="Username"
              className="form--input"
              ref={this.username}
            />
          </label>
        </div>

        <div className="input--group">
          <label>
            Password:
            <br />
            <input
              type="password"
              placeholder="Password"
              className="form--input"
            />
          </label>
        </div>

        <div className="input--group">
          <button className="btn btn--login">Login</button>
        </div>
      </form>
    );
  }
}
