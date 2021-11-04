import React from "react";
import { Link } from "react-router-dom";

const Service = ({ services }) => {
  const { _id, name, price, img, desc } = services;
  return (
    <div className="col shadow-sm">
      <img className="img-fluid rouded-t-3 rounded-top" src={img} alt="img" />
      <h3>{name}</h3>
      <p>{desc}</p>
      <h5>Cost ${price}</h5>
      <Link to={`/service/${_id}`}>
      <button className="btn btn-warning mb-3">Get Now</button>
      </Link>
    </div>
  );
};

export default Service;
