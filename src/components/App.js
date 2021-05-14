//Main application
//Routing is defined here

import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Router } from "react-router";
import NavBar from "./NavBar";
import AddNew from "./AddNew/AddNew";
import InventoryList from "./ItemDetails/InventoryList";
import Modal from "./ItemDetails/Modal";
import history from "./extra/history";
import ItemDelete from "./Delete/ItemDelete";
import TotalValue from "./TotalValue";
import { data } from "../data/data";

const App = () => {
  //Set the vehicle data in state
  const [vehicleData, setData] = useState([]);

  //Set the state from data.js file for first render alone
  useEffect(() => {
    setData(data);
  }, []);

  return (
    <div className="ui container">
      <h1 className="ui header center aligned" style={{ margin: "20px 0" }}>
        Car Inventory Management System
      </h1>
      <TotalValue cars={vehicleData} />
      <Router history={history}>
        <NavBar />
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
          />
          <Route
            path="/new"
            exact
            render={(props) => <AddNew cars={vehicleData} setCars={setData} />}
          />
        </div>
      </Router>
    </div>
  );
};

export default App;
