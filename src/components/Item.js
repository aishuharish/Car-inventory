import React from "react";
// import Modal from "./Modal";
import { Link } from "react-router-dom";
import { retailPrice } from "./retailPrice";
import { numberFormat } from "./numberFormat";

const Item = ({ car }) => {
  // fetch image URL
  const url = require(`../images/${car.make}_${car.model}.png`).default;

  //Calculate the retail price
  const retailPriceValue = retailPrice(car);

  return (
    <Link to={`/item/${car.id}`} className="card" key={car.id}>
      <div className="image">
        <img src={url} alt="carImage" />
      </div>
      <div className="content">
        <p className="header">
          {car.make} {car.model}
        </p>
        {/* <div className="ui two column grid"> */}
        {/* <div className="column"> */}
        {/* <p style={{ color: "#2F4F4F", fontWeight: "bold" }}>
              Model: {car.model}
            </p> */}
        <p>Sales Price: {numberFormat(retailPriceValue)}</p>
        {/* </div> */}
        {/* <div className="column"> */}
        {/* <p>Stock number : {car.id}</p> */}
        {/* <p>Number in stock: {car.stockNumber}</p> */}
        {/* </div> */}
      </div>
      {/* </div> */}
    </Link>
  );
};

export default Item;
