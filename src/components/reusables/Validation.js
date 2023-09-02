import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import Form from "./Form";
import { mobileField } from "../../constant/mobile";

const Validation = ({ action }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <Form
      fields={mobileField(t)}
      onSubmit={(data) => dispatch(action(data))}
      btnName={t("Submit")}
    />
  );
};

export default Validation;
