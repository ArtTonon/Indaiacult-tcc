import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { seeById } from "../services/ArtistService";
import { artists } from "../mock";

const ArtistDetailstPage = () => {
  const ArtistDetails = () => {
    const params = useParams();
    const [artista, setArtista] = useState({});
  };
  return <div></div>;
};

export default ArtistDetailstPage;
