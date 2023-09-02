import { useEffect, useRef, useState } from "react";
import { verify } from "../../app/_thunk/globalThunk";
import { useDispatch } from "react-redux";
import img from "../../assets/images/verify.png";
import { useTranslation } from "react-i18next";
const MobileVerification = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  return (
    <>
      <img src={img} alt="verify" width={"100%"} />
      <VerificationComponent setCode={setCode} code={code} />
    </>
  );
};

const VerificationComponent = ({ code, setCode }) => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);
  const handleInputChange = (e, index) => {
    const updatedValues = [...code];
    updatedValues[index] = e.target.value;
    if (
      e.target.value.length >= e.target.maxLength &&
      index < inputRefs.length - 1
    ) {
      inputRefs[index + 1].current.focus();
    }
    setCode(updatedValues);
  };
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <>
      <div className="verification-inputs">
        {inputRefs.map((inputRef, index) => (
          <input
            key={index}
            ref={inputRef}
            type="text"
            maxLength={1}
            className="verification-input"
            onChange={(e) => handleInputChange(e, index)}
          />
        ))}
        <button
          className="btn btn-primary"
          onClick={() =>
            dispatch(verify({ code: code.toString().replace(/,/g, "") }))
          }
        >
          {t("Submit")}
        </button>
      </div>
    </>
  );
};

export default MobileVerification;
