export const fields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: false,
  },
  {
    name: "nationalId",
    label: "National ID",
    type: "text",
    required: true,
    unique: true,
    validate: /^\d{16}$/,
    validateMessage: "Numero yindangamuntu ntabwo yuzuye",
  },
  {
    name: "experience",
    label: "Experience",
    type: "select",
    options: [
      { label: "0 year", value: "0" },
      { label: "1 year", value: "1" },
      { label: "2 years", value: "2" },
      { label: "above 3 years", value: "above 3 years" },
    ],
    required: true,
  },
  {
    name: "desiredSalary",
    label: "Desired Salary",
    type: "number",
    required: true,
  },
];
