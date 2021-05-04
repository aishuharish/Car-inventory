import React from "react";
import Item from "./Item";

const InventoryList = ({ cars }) => {
  const renderedList = cars.map((car) => <Item car={car} />);

  return (
    <div>
      <div className="ui four cards">{renderedList}</div>
    </div>
  );
};

export default InventoryList;
