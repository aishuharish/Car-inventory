import React from "react";
import { retailPrice } from "./retailPrice";
import { numberFormat } from "./numberFormat";

const TotalValue = ({ cars }) => {
  let totalValue = 0;

  cars.map((car) => {
    const retailPriceValue = retailPrice(car);
    totalValue = totalValue + retailPriceValue;
    return totalValue;
  });
  return (
    <div style={{ textAlign: "right" }}>
      <h3>Total inventory value: {numberFormat(totalValue)}</h3>
      <p style={{ color: "#2F4F4F", fontWeight: "bold" }}>
        Total Stock: {cars.length}
      </p>
    </div>
  );
};

export default TotalValue;
