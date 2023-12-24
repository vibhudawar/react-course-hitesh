import React from "react";

function Card(props) {
  const fullName = props.data.name.first + " " + props.data.name.last;
  return (
    <div>
      <img src={props.data.picture.large} alt="user" className="user-image" />
      <h3>{fullName}</h3>
      <div className="age-gender-div">
        <div className="age-div">
          <p>{props.data.dob.age}</p>
        </div>
        <div className="gender-div">
          <p>{props.data.gender}</p>
        </div>
      </div>
      <p className="location">{props.data.location.country}</p>
    </div>
  );
}

export default Card;
