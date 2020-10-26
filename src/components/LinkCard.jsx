import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Photos from "./Home";

const LinkCard = (props) => {
  return (
    <div className="card" style={{ width: "54rem" }}>
      <Link to={`/${props.photo.id}/details`}>{props.photo.title}</Link>
      <div className="card-body">
        <img src={props.photo.thumbnailUrl} alt={props.photo.title}></img>
      </div>
    </div>
  );
};

export default LinkCard;
