import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import { Link, useRouteMatch } from "react-router-dom";
import { retailPrice } from "./retailPrice";
import { numberFormat } from "./numberFormat";

const Modal = ({ cars }) => {
  const match = useRouteMatch("/item/:id");

  const car = cars.find((car) => {
    return String(car.id) === String(match.params.id);
  });

  //Calculate the retail price
  const retailPriceValue = retailPrice(car);

  const url = require(`../images/${car.make}_${car.model}.png`).default;

  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <i className="close icon"></i> */}
        <div className="header">
          {car.make} {car.model}
        </div>
        <div className="image content">
          <div className="ui medium image">
            <img src={url} alt="carImage" />
          </div>
          <div className="description">
            <p>Stock number : {car.id}</p>
            {/* <p>Number in Stock: {car.stockNumber}</p> */}
            <div className="ui header">Features</div>
            <p>Doors : {car.features.doors}</p>
            <p>Fuel : {car.features.fuel}</p>
            <p>Transmission : {car.features.transmission}</p>
            <p>Interior : {car.features.interior}</p>
            <h3>Sales Price : {numberFormat(retailPriceValue)}</h3>
          </div>
        </div>
        <div className="actions">
          <Link to={`/item/delete/${car.id}`} className="ui button negative">
            Delete
          </Link>
          <Link
            to="/"
            className="ui primary button"
            // onClick={() => history.push("/")}
          >
            Close
          </Link>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
