import React from "react";
import ReactDOM from "react-dom";
// import { useRouteMatch } from "react-router-dom";

const ModalDelete = (props) => {
  // const match = useRouteMatch("/item/delete/:id");
  // const id = match.params.id;

  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal-delete")
  );
};

export default ModalDelete;
