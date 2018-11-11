import React from "react";

function Form({ onSubmit }) {
  let input = null;
  const handSubmit = event => {
    event.preventDefault();
    onSubmit({ title: input.value });
    input.value = ""; //gavasuftavot input value
  };
  return (
    <form onSubmit={handSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control form-control-sm"
          ref={inp => (input = inp)}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary"> Save</button>
        </span>
      </div>
    </form>
  );
}

export default Form;
