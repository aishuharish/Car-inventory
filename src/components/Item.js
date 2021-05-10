import React from "react";
// import Modal from "./Modal";
import { Link } from "react-router-dom";

const Item = ({ car }) => {
  // const [toggle, setToggle] = useState(false);

  //toggle function
  // const toggleState = () => {
  //   if (toggle === false) setToggle(true);
  //   else setToggle(false);
  // };

  // fetch image URL
  const url = require(`../images/${car.make}_${car.model}.png`).default;

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

  return (
    <Link
      to={`/item/${car.id}`}
      className="card"
      key={car.id}
      //   onClick={() => toggleState()}
    >
      {/* {toggle ? <Modal car={car} retailPrice={retailPrice()} /> : null} */}
      <div className="image">
        <img src={url} alt="carImage" />
      </div>
      <div className="content">
        <p className="header">{car.make}</p>
        <p>Model: {car.model}</p>
        <p>Retail Price: ${retailPrice(car)}</p>
      </div>
    </Link>
  );
};

export default Item;
