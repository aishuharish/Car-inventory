//Modal template

import React from "react";
import ReactDOM from "react-dom";

//Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
//two arguments (children to be rendered, DOM node)
const ModalDelete = (props) => {
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
