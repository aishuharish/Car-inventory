import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Router } from "react-router";
import Header from "./Header";
import AddNew from "./AddNew/AddNew";
import InventoryList from "./InventoryList";
import Modal from "./Modal";
import history from "./history";

import { data } from "../data";

const App = () => {
  const [cars, setCars] = useState(data);

  return (
    <div className="ui container">
      <h1 className="ui header center aligned">
        Car Inventory Management System
      </h1>
      <Router history={history}>
        <Header />
        <div>
          <Route
            exact
            path="/"
            render={(props) => <InventoryList cars={cars} setCars={setCars} />}
          />
          <Route
            exact
            path="/item/:id"
            render={(props) => <Modal cars={cars} />}
          />

          <Route path="/new" exact component={AddNew} />
        </div>
      </Router>
    </div>
  );
};

export default App;
