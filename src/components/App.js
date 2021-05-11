import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Router } from "react-router";
import Header from "./Header";
import AddNew from "./AddNew/AddNew";
import InventoryList from "./InventoryList";
import Modal from "./Modal";
import history from "./history";
import ItemDelete from "./ItemDelete";
import TotalValue from "./TotalValue";
import { data } from "../data";

const App = () => {
  const [vehicleData, setData] = useState([]);

  useEffect(() => {
    setData(data);
  }, []);

  // const retailPrice = (car) => {
  //   return (
  //     parseInt(car.basePrice) +
  //     parseInt(car.features.doors === 4 ? 2500.0 : 0.0) +
  //     parseInt(
  //       car.features.fuel === "Gas"
  //         ? 0.0
  //         : car.features.fuel === "Hybrid"
  //         ? 10000.0
  //         : 15000.0
  //     ) +
  //     parseInt(car.features.transmission === "Automatic" ? 1000.0 : 0.0) +
  //     parseInt(car.features.interior === "Cloth" ? 0.0 : 1500.0)
  //   );
  // };

  // const handleUpdate = (car, index) => {
  //  vehicleData = [...vehicleData];
  //   vehicleData[index].retailPrice = retailPrice(car);
  //   setData(vehicleData);
  // };

  // vehicleData.map((car, index) => handleUpdate(car, index));

  return (
    <div className="ui container">
      <h1 className="ui header center aligned" style={{ margin: "20px 0" }}>
        Car Inventory Management System
      </h1>
      <TotalValue cars={vehicleData} />
      <Router history={history}>
        <Header />
        <div>
          <Route
            exact
            path="/"
            render={(props) => <InventoryList cars={vehicleData} />}
          />
          <Route
            exact
            path="/item/:id"
            render={(props) => <Modal cars={vehicleData} />}
          />
          <Route
            exact
            path="/item/delete/:id"
            render={(props) => (
              <ItemDelete cars={vehicleData} setCars={setData} />
            )}
            // component={ItemDelete}
          />

          <Route
            path="/new"
            exact
            render={(props) => <AddNew cars={vehicleData} setCars={setData} />}
            // component={AddNew}
          />
        </div>
      </Router>
    </div>
  );
};

export default App;
