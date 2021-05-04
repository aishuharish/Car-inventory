import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import AddNew from "./AddNew";
import InventoryList from "./InventoryList";

import { data } from "../data";

const App = () => {
  const [cars, setCars] = useState(data);

  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div>
          <Route
            exact
            path="/"
            render={(props) => <InventoryList cars={cars} />}
          />
          <Route path="/new" exact component={AddNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
