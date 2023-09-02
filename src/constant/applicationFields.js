export const applicationFields = [
  {
    name: "hasTransport",
    label: "Pfite itike",
    type: "select",
    options: [
      { label: "Yego", value: true },
      { label: "Oya", value: false },
    ],
    required: true,
  },
  {
    name: "availablePeriod",
    label: "Natangira akazi",
    type: "select",
    options: [
      { label: "uwo munsi mpagawe", value: "current day" },
      { label: "nyuma yumunsi umwe", value: "after 1 day" },
      { label: "nyuma yiminsi 2", value: "after 2 day" },
      { label: "ntabwo mbizi", value: "I am not sure" },
    ],
    required: true,
  },
];
