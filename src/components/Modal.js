import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import { Link } from "react-router-dom";

const Modal = ({ car, retailPrice }) => {
  const url = require(`../images/${car.id}_${car.make}_${car.model}.png`)
    .default;
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <i className="close icon"></i>
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
            <h3>Retail Price : {retailPrice}</h3>
          </div>
        </div>
        <div className="actions">
          <Link to="/" className="ui primary button">
            Close
          </Link>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
