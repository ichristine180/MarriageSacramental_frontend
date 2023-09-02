import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearMessage } from "../../app/_slice/globalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const ErrorDisplay = () => {
  const error = useSelector((state) => state.global.errorMessage);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearMessage());
  };

  return (
    <div>
      {error && (
        <div className="alert alert-warning" role="alert">
          <p>
            {error}
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

export default ErrorDisplay;
