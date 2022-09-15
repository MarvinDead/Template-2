import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../../../context/context";
import Modal from "react-bootstrap/Modal";
import Form from "../Form/form"

function ModalP() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="d-flex flex-column">
            <div className="text-end">
              <p className="fs-5" style={{cursor:"pointer"}} onClick={handleClose}>X</p>
            </div>
            <div className="text-center">
              <img src={rpdata?.dbPrincipal?.logo} style={{width:"40%"}}/>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4 className="text-center">Request An Estimate Now</h4>
            <Form/>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalP;
