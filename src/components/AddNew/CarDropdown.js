import React from "react";

class CarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturer: [],
      type: [],
      model: [],
      selectedManufacturer: "--Choose Manufacturer--",
      selectedType: "--Choose Type--",
    };
    this.changeManufacturer = this.changeManufacturer.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  componentDidMount() {
    this.setState({
      manufacturer: [
        {
          name: "Ford",
          type: [
            {
              name: "Car",
              model: ["Focus", "Fusion"],
            },
            {
              name: "Truck",
              model: ["F-150"],
            },
          ],
        },
        {
          name: "Lincoln",
          type: [
            { name: "Car", model: ["MKZ"] },
            { name: "SUV", model: ["Navigator"] },
          ],
        },
        {
          name: "Dodge",
          type: [
            { name: "Car", model: ["Avenger", "Dart"] },
            { name: "SUV", model: ["Durango"] },
          ],
        },
      ],
    });
  }

  changeManufacturer(event) {
    this.setState({ selectedManufacturer: event.target.value });
    this.setState({
      type: this.state.manufacturer.find(
        (mfr) => mfr.name === event.target.value
      ).type,
    });
  }

  changeType(event) {
    this.setState({ selectedType: event.target.value });
    const stats = this.state.manufacturer.find(
      (mfr) => mfr.name === this.state.selectedManufacturer
    ).type;
    this.setState({
      model: stats.find((stat) => stat.name === event.target.value).model,
    });
  }

  render() {
    return (
      <div className="three fields">
        <div className="field">
          <label className="label">Select a Manufacturer</label>
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

        <div className="field">
          <label className="label">Select vehicle type</label>
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

        <div className="field">
          <label className="label">Select a Model</label>
          <select placeholder="Model" className="ui fluid dropdown">
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
