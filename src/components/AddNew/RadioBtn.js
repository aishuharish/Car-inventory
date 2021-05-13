//Reusable radio button

//Example:  <RadioBtn
//           name="fuel"
//           options={fuelOptions}
//           label="Select Fuel type"
//           onSelectedChange={setFuel}
//         />

import React from "react";

const RadioBtn = ({ name, options, label, onSelectedChange }) => {
  const renderedList = options.map((option) => (
    <div className="field" key={option.value}>
      <div className="ui radio checkbox">
        <input
          type="radio"
          value={option.value}
          name={name}
          onChange={(e) => onSelectedChange(option)}
        />
        <label>
          {option.label} - ${option.price}
        </label>
      </div>
    </div>
  ));

  return (
    <div className="grouped fields">
      <label htmlFor={name}>{label}</label>
      {renderedList}
    </div>
  );
};

export default RadioBtn;
