//Component for creating new form to add new vehicle detail
//Uses reusable radio button

import React, { useState, useEffect } from "react";
import CarDropdown from "./CarDropdown";
import CurrencyInput from "react-currency-input-field"; //Displays the field in currency format as user enters
import RadioBtn from "./RadioBtn";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import history from "../extra/history";
import { numberFormat } from "../extra/numberFormat";

//import input data for Radio buttons
import { doorOptions } from "../../data/door";
import { fuelOptions } from "../../data/fuel";
import { transmissionOptions } from "../../data/transmission";
import { interiorOptions } from "../../data/interior";

//Component for creating new form to add new vehicle detail
const AddNew = ({ setCars, cars }) => {
  //All the form fields are stored in state
  const [selectedMfr, setSelectedMfr] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [price, setPrice] = useState("");
  const [doors, setDoors] = useState({});
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [interior, setInterior] = useState("");
  const [numberInStock, setNumber] = useState(1);

  //Total Sale price Calculation
  const total =
    parseInt(price === "" ? 0 : price) +
    parseInt(doors.price ? doors.price : 0) +
    parseInt(fuel.price ? fuel.price : 0) +
    parseInt(transmission.price ? transmission.price : 0) +
    parseInt(interior.price ? interior.price : 0);
  const [totalPrice, setTotalPrice] = useState(total);

  //Change total price value as user inputs the data
  useEffect(() => {
    setTotalPrice(total);
  }, [total]);

  //Function for form submission
  const onFormSubmit = (event) => {
    event.preventDefault();
    let newItem = [];
    for (let i = 0; i < numberInStock; i++) {
      newItem.push({
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
      });
    }
    //Adding new vehicle to the state
    setCars([...cars, ...newItem]);
    //Link to homepage
    history.push("/");
  };

  //Disable the submit buttom untill all mandatory fields have value
  const disabled =
    selectedMfr.length > 0 &&
    selectedType.length > 0 &&
    selectedModel.length > 0 &&
    price.length > 0 &&
    Object.keys(doors).length > 0 &&
    Object.keys(fuel).length > 0 &&
    Object.keys(transmission).length > 0 &&
    Object.keys(interior).length > 0;

  return (
    <form className="ui form" onSubmit={onFormSubmit}>
      <br />
      <CarDropdown
        setSelectedMfr={setSelectedMfr}
        setSelectedType={setSelectedType}
        setSelectedModel={setSelectedModel}
      />
      <br />
      <div className="ui centered grid" style={{ marginTop: "20px" }}>
        <div className="inline field ui large form ">
          <label className="ui header">Enter Retail price of the vehicle</label>

          <CurrencyInput
            placeholder="$15000"
            decimalsLimit={2}
            size="10"
            prefix="$"
            decimalSeparator="."
            groupSeparator=","
            intlConfig={{ locale: "en-US", currency: "USD" }}
            onValueChange={(value) => {
              setPrice(value);
            }}
            value={price}
          />

          <label style={{ marginLeft: "50px", marginRight: "20px" }}>
            Number in Stock
          </label>
          <input
            type="number"
            value={numberInStock}
            min="1"
            max="999999"
            onInput={(e) =>
              e.target.validity.valid
                ? setNumber(e.target.value)
                : numberInStock
            }
          />
        </div>
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

      <div style={{ margin: "30px", textAlign: "right" }}>
        <h2>
          Sales price per vehicle:{" "}
          {totalPrice === 0 ? "" : numberFormat(totalPrice)}
        </h2>
      </div>
      <div>
        <Link to="/">
          <button className="ui button right floated">Cancel</button>
        </Link>
        <button
          className="ui primary button  right floated "
          type="submit"
          disabled={!disabled}
        >
          Add to Inventory
        </button>
      </div>
    </form>
  );
};

export default AddNew;
