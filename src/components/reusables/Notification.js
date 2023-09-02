import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setErrorMessage,
  setSuccessMessage,
} from "../../app/_slice/globalSlice";
const Notification = () => {
  const gState = useSelector((state) => state.global);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (gState.errorMessage || gState.successMessage) setShowModal(true);
  }, [gState.successMessage, gState.errorMessage]);
  const dispatch = useDispatch();
  const handleClose = () => {
    setShowModal(false);
    dispatch(setSuccessMessage(null));
    dispatch(setErrorMessage(null));
  };
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Notification</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={gState.successMessage ? faCheckCircle : faTimesCircle}
            size={"5x"}
            className={`${
              gState.successMessage ? "text-success" : "text-danger"
            } me-2`}
          />
          <p>{gState.errorMessage || gState.successMessage}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-primary" onClick={handleClose}>
          Okay
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default Notification;
