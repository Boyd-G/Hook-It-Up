import React, { useState, useEffect } from "react";

const PhotoCard = (props) => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const { id } = props.match.params;

    async function fetchData() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      res.json().then((res) => setPhoto(res));
    }

    fetchData();
  }, []);

  return (
    <div className="card1" style={{ width: "54rem" }}>
      <div className="card-title1">{photo.title}</div>
      <div className="card-body1">
        <img src={photo.url} alt={photo.title}></img>
      </div>
    </div>
  );
};

export default PhotoCard;
