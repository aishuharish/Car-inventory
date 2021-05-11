import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Router } from "react-router";
import Header from "./Header";
import AddNew from "./AddNew/AddNew";
import InventoryList from "./InventoryList";
import Modal from "./Modal";
import history from "./history";

import { data } from "../data";

const App = () => {
  const [vehicleData, setData] = useState([]);

  useEffect(() => {
    setData(data);
  }, []);

  return (
    <div className="ui container">
      <h1 className="ui header center aligned" style={{ margin: "20px 0" }}>
        Car Inventory Management System
      </h1>
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
