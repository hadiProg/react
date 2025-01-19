import React from "react";
import "./popupItemInfo.css";

export default function PopupItemInfo({ setShowModalVar }) {

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-mdb-backdrop="static"
      data-mdb-keyboard="false"
      tabIndex="1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      style={{ backgroundColor: "green", height: "100vh" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-mdb-ripple-init
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-mdb-ripple-init
              data-mdb-dismiss="modal"
              onClick={() => {
                setShowModalVar(false);
              }}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-mdb-ripple-init
            >
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
