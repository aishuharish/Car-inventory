//Component for total inventory value and total number of stock

import React from "react";
import { salePrice } from "./extra/salePrice";
import { numberFormat } from "./extra/numberFormat";

const TotalValue = ({ cars }) => {
  let totalValue = 0;

  cars.map((car) => {
    const salePriceValue = salePrice(car);
    totalValue = totalValue + salePriceValue;
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
