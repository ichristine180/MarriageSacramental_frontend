import { useTranslation } from "react-i18next";
import Form from "./reusables/Form";
import { useDispatch } from "react-redux";
import { login } from "../app/_thunk/globalThunk";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="hirehub-form" style={{ justifyContent: "center" }}>
      <div className="hirehub-container width-40">
        <h2>SignIn</h2>
        <Form
          fields={fields}
          btnName={t("Login")}
          onSubmit={(data) => {
            dispatch(login(data,navigate));
          
          }}
        />
      </div>
    </div>
  );
};
const fields = [
  {
    name: "mobileNo",
    label: "Mobile NO",
    type: "text",
    icon: "zmdi zmdi-phone",
    required: true,
    validate: /^(07[983]|\+2507[983])(\d{7})$/,
    validateMessage: "Invalid mobile format",
    placeholder: "07xxxxxxxx",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    icon: "zmdi zmdi-lock-outline",
    placeholder: "Enter password",
    required: true,
    validate: null,
    validateMessage: null,
  },
];
export default Login;
