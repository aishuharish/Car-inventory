import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import { Link, useRouteMatch } from "react-router-dom";

const Modal = ({ cars }) => {
  const match = useRouteMatch("/item/:id");

  const car = cars.find((car) => {
    return parseInt(car.id) === parseInt(match.params.id);
  });

  //Calculate the retail price
  const retailPrice = () =>
    parseInt(car.basePrice) +
    parseInt(car.features.doors === 4 ? 2500.0 : 0.0) +
    parseInt(
      car.features.fuel === "Gas"
        ? 0.0
        : car.features.fuel === "Hybrid"
        ? 10000.0
        : 15000.0
    ) +
    parseInt(car.features.transmission === "Automatic" ? 1000.0 : 0.0) +
    parseInt(car.features.interior === "Cloth" ? 0.0 : 1500.0);

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
            <div className="ui header">Features</div>
            <p>Doors : {car.features.doors}</p>
            <p>Fuel : {car.features.fuel}</p>
            <p>Transmission : {car.features.transmission}</p>
            <p>Interior : {car.features.interior}</p>
            <h3>Retail Price :${retailPrice()}</h3>
          </div>
        </div>
        <div className="actions">
          <Link
            to="/"
            className="ui primary button"
            onClick={() => history.push("/")}
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
