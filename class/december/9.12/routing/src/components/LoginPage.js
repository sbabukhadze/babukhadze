import React, { Component } from "react";

export const LoginPage = props => {
  return (
    <div className="form form-login">
      <div className="input--group">
        <label>
          Username:
          <br/>
          <input type="text" placeholder="Username" className="form--input" />
        </label>
      </div>

      <div className="input--group">
        <label>
          Password:
          <br/>
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
    </div>
  );
};
