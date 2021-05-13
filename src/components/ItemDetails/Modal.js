//Modal popup shows each vehicle features in detail

import React from "react";
import ReactDOM from "react-dom";
import history from "../extra/history";
import { Link, useRouteMatch } from "react-router-dom";
import { salePrice } from "../extra/salePrice";
import { numberFormat } from "../extra/numberFormat";
import { imageURL } from "../extra/imageURL";

const Modal = ({ cars }) => {
  //fetch the vehicle information selected using Id
  const match = useRouteMatch("/item/:id");
  const car = cars.find((car) => {
    return String(car.id) === String(match.params.id);
  });

  //Calculate the sale price
  const salePriceValue = numberFormat(salePrice(car));

  //fetch the vehicle image
  const url = imageURL(car);

  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()} //stop onClick bubbling up to parent which links to "/" homepage
      >
        <div className="header">
          {car.make} {car.model}
        </div>
        <div className="image content">
          <div className="ui medium image">
            <img src={url} alt="carImage" />
          </div>
          <div className="description">
            <p>Stock number : {car.id}</p>

            <div className="ui header">Features</div>
            <p>Doors : {car.features.doors}</p>
            <p>Fuel : {car.features.fuel}</p>
            <p>Transmission : {car.features.transmission}</p>
            <p>Interior : {car.features.interior}</p>
            <h3>Sales Price : {salePriceValue}</h3>
          </div>
        </div>
        <div className="actions">
          <Link to={`/item/delete/${car.id}`} className="ui button negative">
            Delete
          </Link>
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
