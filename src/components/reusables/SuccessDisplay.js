import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "../../app/_slice/globalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const SuccessDisplay = () => {
  const success = useSelector((state) => state.global.successMessage);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearMessage());
  };

  return (
    <div>
      {success && (
        <div className="alert alert-success" role="alert">
          <p>
            {success}
            <FontAwesomeIcon
              icon={faClose}
              onClick={handleClose}
              className="cursor pull-right"
            />
          </p>
        </div>
      )}
    </div>
  );
};

export default SuccessDisplay;
