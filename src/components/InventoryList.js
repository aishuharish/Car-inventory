import React from "react";

const InventoryList = ({ cars }) => {
  const renderedList = cars.map((car) => {
    const url = require(`../images/${car.id}_${car.make}_${car.model}.png`)
      .default;

    const retailPrice =
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
    //console.log(retailPrice);

    return (
      <div className="card" key={car.id}>
        <div className="image">
          <img src={url} alt="carImage" />
        </div>
        <div className="content">
          <p className="header">{car.make}</p>
          <p>Model: {car.model}</p>
          <p>Retail Price: {retailPrice}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui four cards">{renderedList}</div>
    </div>
  );
};

export default InventoryList;
