//Determine the item to be deleted and change the state
//Pass the props to modal for showing delete message and actions

import React from "react";
import ModalDelete from "./ModalDelete";
import history from "../extra/history";
import { Link, useRouteMatch } from "react-router-dom";

const ItemDelete = (props) => {
  //fetch the item with the id seletced using match params
  const match = useRouteMatch("/item/delete/:id");
  const id = match.params.id;

  //Changing the state to remove the id that needs to be deleted
  const handleDelete = () => {
    const cars = props.cars.filter((car) => String(car.id) !== String(id));
    props.setCars(cars);
  };

  //Define the actions that modal has to perform with routing links and event handlers
  const actions = (
    <React.Fragment>
      <Link to="/">
        <button className="ui button negative" onClick={handleDelete}>
          Delete
        </button>
      </Link>
      <Link to="/" className="ui primary button">
        Close
      </Link>
    </React.Fragment>
  );

  return (
    <div>
      <ModalDelete
        title="Delete Vehicle"
        content="Are you sure you want to delete this vehicle?"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default ItemDelete;
