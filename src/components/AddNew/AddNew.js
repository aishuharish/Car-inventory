import React, { useState, useEffect } from "react";
import CarDropdown from "./CarDropdown";
import CurrencyInput from "react-currency-input-field";
import RadioBtn from "./RadioBtn";

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

const AddNew = () => {
  // const [mfr,setMfr]=useState("Ford");
  // const [type,setType]=useState("Car");
  // const [model,setModel]=useState("");
  const [price, setPrice] = useState(10000);
  const [doors, setDoors] = useState(doorOptions[0]);
  const [fuel, setFuel] = useState(fuelOptions[0]);
  const [transmission, setTransmission] = useState(transmissionOptions[0]);
  const [interior, setInterior] = useState(interiorOptions[0]);
  const total =
    parseInt(price) +
    parseInt(doors.price) +
    parseInt(fuel.price) +
    parseInt(transmission.price) +
    parseInt(interior.price);
  const [totalPrice, setTotalPrice] = useState(total);

  useEffect(() => {
    setTotalPrice(total);
  }, [total]);
  return (
    <form className="ui form">
      <CarDropdown />

      <h4 className="ui dividing header">Select the features</h4>

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

      <div className="four wide field">
        <label className="label">Enter the base price of the vehicle</label>
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
      <div className="four wide field">
        <h3>
          Total price of the vehicle:
          {totalPrice}
        </h3>
      </div>
    </form>
  );
};

export default AddNew;
