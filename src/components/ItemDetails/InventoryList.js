//Sort the input data and generate inidividual item/card

import React from "react";
import Item from "./Item";

const InventoryList = ({ cars, setCars }) => {
  //sorting the vehicle based on make and model
  const renderedList = []
    .concat(cars)
    .sort((a, b) => {
      if (a.make === b.make) {
        return a.model < b.model ? -1 : 1;
      } else {
        return a.make < b.make ? -1 : 1;
      }
    })
    .map((car, index) => <Item car={car} key={car.id} />);

  return (
    <div>
      <div className="ui three stackable cards">{renderedList}</div>
    </div>
  );
};

export default InventoryList;
