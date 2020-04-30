import React from "react";
import "./CardTemplate.css";
import { Link } from "react-router-dom";
import { Card } from "antd";

export const CardTemplate = ({ name, date, vote, image, id }) => (
  <Link to={`/movie/${id}`}>
    <Card style={{ width: 240 }} bodyStyle={{ pading: 0 }}>
      <div className="custom-image">
        <img
          alt={name}
          width="100%"
          src={`https://image.tmdb.org/t/p/w500${image}`}
        />
      </div>
      <div className="custom-card">
        <h3>{name}</h3>
        <p>{`Release date: ${date} || Votes: ${vote}`}</p>
      </div>
    </Card>
  </Link>
);
