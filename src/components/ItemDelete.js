import React from "react";
import ModalDelete from "./ModalDelete";
import history from "./history";
import { Link, useRouteMatch } from "react-router-dom";

const ItemDelete = (props) => {
  const match = useRouteMatch("/item/delete/:id");
  const id = match.params.id;

  const handleDelete = () => {
    const cars = props.cars.filter((car) => String(car.id) !== String(id));
    props.setCars(cars);
  };

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
