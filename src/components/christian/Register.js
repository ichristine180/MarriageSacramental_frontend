import { useTranslation } from "react-i18next";
import Form from "../reusables/Form";
import { useDispatch } from "react-redux";
import { register } from "../../app/_thunk/globalThunk";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="hirehub-form" style={{ justifyContent: "center" }}>
      <div className="hirehub-container">
        <h2>Christian Registration</h2>
        <Form
          fields={fields}
          btnName={t("Register")}
          onSubmit={(data) => {
            dispatch(register(data));
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};
const fields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    icon: "zmdi zmdi-account",
    required: true,
    placeholder: "Enter your first name",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    icon: "zmdi zmdi-account",
    required: true,
    placeholder: "Enter your last name",
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    icon: "zmdi zmdi-email",
    required: true,
    validate: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    validateMessage: "Invalid email format",
    placeholder: "Enter your email address",
  },
  {
    name: "cardNumber",
    label: "Card Number",
    type: "text",
    icon: "zmdi zmdi-card",
    required: true,
    placeholder: "Enter your card number",
  },
  {
    name: "mobileNo",
    label: "Mobile No",
    type: "text",
    icon: "zmdi zmdi-phone",
    required: true,
    validate: /^(07[983]|\+2507[983])(\d{7})$/,
    validateMessage: "Invalid mobile format",
    placeholder: "07xxxxxxxx",
  },
  {
    name: "parish",
    label: "Parish",
    type: "text",
    icon: "zmdi zmdi-church",
    required: true,
    placeholder: "Enter your parish",
  },
  {
    name: "location",
    label: "Location",
    type: "text",
    icon: "zmdi zmdi-pin",
    required: true,
    placeholder: "Enter your location",
  },
  {
    name: "dob",
    label: "Date of Birth",
    type: "date",
    icon: "zmdi zmdi-calendar",
    required: true,
    placeholder: "Select your date of birth",
  },
];

export default Register;
