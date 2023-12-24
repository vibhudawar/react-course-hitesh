import React from "react";

function Button(props) {
  return (
    <div>
      <button className="button-74" onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
}

export default Button;
