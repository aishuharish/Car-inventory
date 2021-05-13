//Dropdown for make, type and model
//Chained dropdown

import React from "react";
import { manufacturer } from "../../data/manufacture";

class CarDropdown extends React.Component {
  //declare state and define initial state
  state = {
    manufacturer: [],
    type: [],
    model: [],
    selectedManufacturer: "--Choose Manufacturer--",
    selectedType: "--Choose Type--",
  };

  //load the manufacture data to state
  componentDidMount() {
    this.setState({ manufacturer: manufacturer });
  }

  //update selected manufacture and its resulting type
  changeManufacturer = (event) => {
    this.setState({ selectedManufacturer: event.target.value });
    this.props.setSelectedMfr(event.target.value); //updating the selected manufacture to add new form component
    this.setState({
      type: this.state.manufacturer.find(
        (mfr) => mfr.name === event.target.value
      ).type,
    });
  };

  //update selected type and its resulting model
  changeType = (event) => {
    this.setState({ selectedType: event.target.value });
    this.props.setSelectedType(event.target.value); //updating the selected model to add new form component
    const stats = this.state.manufacturer.find(
      (mfr) => mfr.name === this.state.selectedManufacturer
    ).type;
    this.setState({
      model: stats.find((stat) => stat.name === event.target.value).model,
    });
  };

  render() {
    return (
      <div className="three fields">
        {/*  Make dropdown */}
        <div className="field">
          <h4>
            <label className="label">Select a Manufacturer</label>
          </h4>
          <select
            className="ui fluid dropdown"
            placeholder="Make"
            value={this.state.selectedManufacturer}
            onChange={this.changeManufacturer}
          >
            <option value="">--Choose Manufacturer--</option>
            {this.state.manufacturer.map((e, key) => {
              return (
                <option value={e.name} key={key}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>

        {/* type dropdown */}
        <div className="field">
          <h4>
            <label className="label">Select vehicle type</label>
          </h4>
          <select
            className="ui fluid dropdown"
            placeholder="Type"
            value={this.state.selectedType}
            onChange={this.changeType}
          >
            <option value="">--Choose Type--</option>
            {this.state.type.map((e, key) => {
              return (
                <option value={e.name} key={key}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>

        {/* model dropdown */}
        <div className="field">
          <h4>
            <label className="label">Select a Model</label>
          </h4>
          <select
            placeholder="Model"
            className="ui fluid dropdown"
            onChange={(e) => this.props.setSelectedModel(e.target.value)}
          >
            <option value="">--Choose Model--</option>
            {this.state.model.map((e, key) => {
              return (
                <option value={e} key={key}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default CarDropdown;
