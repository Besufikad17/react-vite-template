import React from "react";

function Card(props) {
  return (
    <div>
      <img
        className="rounded img-fluid d-block w-100 fit-cover"
        style={{height: "200px"}}
        src={props.img}
      />
      <div className="py-4">
        <h4>{props.title}</h4>
        <p>
          {props.details}
        </p>
      </div>
    </div>
  );
}

export default Card;
