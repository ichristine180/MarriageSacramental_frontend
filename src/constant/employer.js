export const empType = [
  { label: "Umukozi usanzwe(ukora byose)", value: "0" },
  { label: "Umukozi wize guteka", value: "1" },
  { label: "Umukozi wize kurera abana", value: "2" },
  { label: "Umukozi utwara imodoka", value: "3" },
  { label: "Umuzamu", value: "4" },
];
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
];

export const requestFields = [
  {
    name: "offeredSalary",
    label: "Offering Salary",
    type: "number",
    required: true,
  },

  {
    name: "employeeType",
    label: "Employee level",
    type: "select",
    options: empType,
    required: true,
  },
];
