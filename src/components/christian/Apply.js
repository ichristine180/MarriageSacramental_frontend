import { useTranslation } from "react-i18next";
import Form from "../reusables/Form";
import { useDispatch, useSelector } from "react-redux";
import { apply, validatePartner } from "../../app/_thunk/globalThunk";
import { useNavigate } from "react-router-dom";

const Apply = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const partner = useSelector((state) => state.global.partner);
  const partnerInvalid = useSelector((state) => state.global.partnerInvalid);
  const christian = useSelector((state) => state.global.christian);
  return (
    <div className="hirehub-form" style={{ justifyContent: "center" }}>
      <div className="hirehub-container">
        <h2>Marriage Application</h2>
        {!partner && (
          <p className="text-danger text-center">{partnerInvalid}</p>
        )}
        {!partner && (
          <Form
            fields={[
              {
                name: "mobileNo",
                label: "Partner Mobile No",
                type: "text",
                icon: "zmdi zmdi-phone",
                required: true,
                validate: /^(07[983]|\+2507[983])(\d{7})$/,
                validateMessage: "Invalid mobile format",
                placeholder: "07xxxxxxxx",
              },
            ]}
            btnName={t("Validate")}
            onSubmit={(data) => dispatch(validatePartner(data))}
          />
        )}

        {partner && (
          <Form
            fields={[
              {
                name: "names",
                label: "Partner names",
                type: "text",
                icon: "zmdi zmdi-account",
                value: partner.firstName + " " + partner.lastName,
                disabled: true,
              },
              {
                name: "requestMariageDate",
                label: "Marriage Date",
                type: "date",
                icon: "zmdi zmdi-calendar",
                required: true,
                placeholder: "Select Marriage Date",
              },
            ]}
            btnName={t("Apply")}
            onSubmit={(data) => {
              dispatch(
                apply(
                  {
                    requestMariageDate: data.requestMariageDate,
                    partenerId: partner.id,
                    christianId: christian.id,
                  },
                  navigate
                )
              );
            }}
          />
        )}
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

export default Apply;
