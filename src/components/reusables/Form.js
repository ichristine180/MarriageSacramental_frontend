import { t } from "i18next";
import React, { useEffect, useRef, useState } from "react";

const Form = ({ fields, onSubmit, btnName, child, child2, disable }) => {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const isDateField = fields.find(
      (field) => field.name === name && field.type === "date"
    );
    console.log(isDateField);
    if (isDateField) {
      const selectedDate = new Date(value);
      const currentDate = new Date();
      if (selectedDate < currentDate) {
        setFormErrors({
          ...formErrors,
          [name]: "Please select a future date.",
        });
      } else {
        setFormValues({ ...formValues, [name]: value });
        setFormErrors({ ...formErrors, [name]: null });
      }
    } else {
      setFormValues({ ...formValues, [name]: value });
      setFormErrors({ ...formErrors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateFields(fields, formValues);
    if (Object.keys(errors).length === 0) {
      onSubmit(formValues);
    } else {
      setFormErrors(errors);
    }
  };

  const validateFields = (fields, values) => {
    const errors = {};
    fields.forEach((field) => {
      if (field.required && !values[field.name]) {
        errors[field.name] = `${field.label} ${t("Required")}`;
      } else if (field.validate && !field.validate.test(values[field.name])) {
        errors[field.name] = field.validateMessage || "Invalid format";
      }
    });
    return errors;
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {fields.map((field, i) => {
        return (
          <div className="form-group" key={i}>
            <label>{field.label}</label>
            {(field.type === "text" ||
              field.type === "password" ||
              field.type === "email" ||
              field.type === "file" ||
              field.type === "number" ||
              field.type === "date") && (
              <input
                type={field.type}
                name={field.name}
                value={formValues[field.name] || field.value || ""}
                onChange={handleChange}
                placeholder={field.placeholder || field.label}
                ref={i === 0 ? firstInputRef : null}
                className="form-control"
                disabled={field.disabled}
              />
            )}
            {field.type === "select" && (
              <select
                name={field.name}
                value={formValues[field.name] || ""}
                onChange={handleChange}
                className="form-control"
              >
                <option>{t("Select")}</option>
                {field.options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
            {formErrors[field.name] && (
              <span style={{ color: "red" }}>{formErrors[field.name]}</span>
            )}
          </div>
        );
      })}
      {child}
      {child2}
      <input
        type="submit"
        className="btn btn-primary mt-3 pull-right"
        value={btnName}
        disabled={disable}
      />
    </form>
  );
};

export default Form;
