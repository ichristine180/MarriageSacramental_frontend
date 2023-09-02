export const mobileField = (t, isPaying) => [
  {
    name: "mobileNo",
    label: isPaying ? t("PayerMobile") : t("Mobile"),
    type: "text",
    icon: "zmdi zmdi-phone",
    required: true,
    validate: /^(07[2839]|\+2507[28])(\d{7})$/,
    validateMessage: t("Invalidmobile"),
    placeholder: "07xxxxxxxx",
  },
];
