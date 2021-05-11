import React from "react";
import { retailPrice } from "./retailPrice";
import { numberFormat } from "./numberFormat";

const TotalValue = ({ cars }) => {
  let totalValue = 0;

  cars.map((car) => {
    const retailPriceValue = retailPrice(car);
    totalValue = totalValue + retailPriceValue * car.stockNumber;
    return totalValue;
  });
  return (
    <div style={{ textAlign: "right" }}>
      <h4>Total inventory value: {numberFormat(totalValue)}</h4>
    </div>
  );
};

export default TotalValue;
