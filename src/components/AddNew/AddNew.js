import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
import CarDropdown from "./CarDropdown";
import CurrencyInput from "react-currency-input-field";
import RadioBtn from "./RadioBtn";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import history from "../history";

const doorOptions = [
  {
    label: "2 doors",
    value: "2",
    price: 0.0,
  },
  {
    label: "4 doors",
    value: "4",
    price: 2500.0,
  },
];

const fuelOptions = [
  { label: "Gas", value: "Gas", price: 0.0 },
  { label: "Hybrid", value: "Hybrid", price: 10000.0 },
  { label: "Electric", value: "Elelctric", price: 15000.0 },
];

const transmissionOptions = [
  { label: "Manual", value: "Manual", price: 0.0 },
  { label: "Automatic", value: "Automatic", price: 1000.0 },
];

const interiorOptions = [
  { label: "Cloth", value: "Cloth", price: 0.0 },
  { label: "Leather", value: "Leather", price: 1500.0 },
];

const AddNew = ({ setCars, cars }) => {
  const [selectedMfr, setSelectedMfr] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [price, setPrice] = useState("");
  const [doors, setDoors] = useState({});
  const [fuel, setFuel] = useState({});
  const [transmission, setTransmission] = useState({});
  const [interior, setInterior] = useState({});
  const total =
    parseInt(price === "" ? 0 : price) +
    parseInt(doors.price ? doors.price : 0) +
    parseInt(fuel.price ? fuel.price : 0) +
    parseInt(transmission.price ? transmission.price : 0) +
    parseInt(interior.price ? interior.price : 0);
  const [totalPrice, setTotalPrice] = useState(total);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: uuidv4(),
      type: selectedType,
      make: selectedMfr,
      model: selectedModel,
      basePrice: price,
      features: {
        doors: doors.value,
        fuel: fuel.value,
        transmission: transmission.value,
        interior: interior.value,
      },
    };

    setCars([...cars, newItem]);
    // <Redirect to="/" />;
    history.push("/");
  };

  useEffect(() => {
    setTotalPrice(total);
  }, [total]);

  return (
    <form className="ui form" onSubmit={onFormSubmit}>
      <br />
      <CarDropdown
        setSelectedMfr={setSelectedMfr}
        setSelectedType={setSelectedType}
        setSelectedModel={setSelectedModel}
      />
      <br />
      <div className="four wide field ui huge form ">
        <h3 className="ui header">Enter the base price of the vehicle</h3>
        <CurrencyInput
          placeholder="$15000"
          decimalsLimit={2}
          prefix="$"
          decimalSeparator="."
          groupSeparator=","
          intlConfig={{ locale: "en-US", currency: "USD" }}
          onValueChange={(value) => {
            setPrice(value);
          }}
          value={price}
        />
      </div>
      <br />
      <h4 className="ui dividing header">Select the features</h4>
      <div className="four fields">
        <RadioBtn
          name="doors"
          options={doorOptions}
          label="Select the number of Doors"
          onSelectedChange={setDoors}
        />
        <br />
        <RadioBtn
          name="fuel"
          options={fuelOptions}
          label="Select Fuel type"
          onSelectedChange={setFuel}
        />
        <br />

        <RadioBtn
          name="transmission"
          options={transmissionOptions}
          label="Select Transmission type"
          onSelectedChange={setTransmission}
        />
        <br />
        <RadioBtn
          name="interior"
          options={interiorOptions}
          label="Select the interior"
          onSelectedChange={setInterior}
        />
        <br />
      </div>

      <div className="four wide field right">
        <h3>
          Total price of the vehicle:
          {totalPrice === 0 ? "" : totalPrice}
        </h3>
      </div>
      <div>
        <Link to="/">
          <button className="ui button right floated">Cancel</button>
        </Link>
        <button className="ui primary button  right floated " type="submit">
          Add to Inventory
        </button>
      </div>
    </form>
  );
};

export default AddNew;
