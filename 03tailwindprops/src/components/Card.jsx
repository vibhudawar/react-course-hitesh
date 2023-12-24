import React from "react";

function Card({ name = "", post = "" }) {
  return (
    <>
      <h4>Hello {name}</h4>
      <h4>Your Post is {post}</h4>
    </>
  );
}

export default Card;
