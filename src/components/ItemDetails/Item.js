//display for each individual card

import React from "react";
import { Link } from "react-router-dom";
import { salePrice } from "../extra/salePrice";
import { numberFormat } from "../extra/numberFormat";
import { imageURL } from "../extra/imageURL";

const Item = ({ car }) => {
  // fetch image URL
  //const url = require(`../../data/images/${car.make}_${car.model}.png`).default;
  const url = imageURL(car);

  //Calculate the retail price
  const retailPriceValue = numberFormat(salePrice(car));

  return (
    <Link to={`/item/${car.id}`} className="card" key={car.id}>
      <div className="image">
        <img src={url} alt="carImage" />
      </div>
      <div className="content">
        <p className="header">
          {car.make} {car.model}
        </p>
        <p>Sales Price: {retailPriceValue}</p>
      </div>
    </Link>
  );
};

export default Item;
