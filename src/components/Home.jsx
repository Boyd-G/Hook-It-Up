import React, { useState, useEffect } from "react";
import LinkCard from "./LinkCard";

const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      res.json().then((res) => setPhotos(res));
    }

    fetchData();
  }, []);

  return photos.map((photo) => {
    return <LinkCard key={photo.id} photo={photo} />;
  });
};

export default Home;
