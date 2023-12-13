export const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  //   {
  //     id: "category",
  //     name: "Category",
  //     options: [
  //       { value: "new-arrivals", label: "New Arrivals", checked: false },
  //       { value: "sale", label: "Sale", checked: false },
  //       { value: "travel", label: "Travel", checked: true },
  //       { value: "organization", label: "Organization", checked: false },
  //       { value: "accessories", label: "Accessories", checked: false },
  //     ],
  //   },
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "159$ to 399$", checked: false },
      { value: "399-999", label: "399$ to 999$", checked: false },
      { value: "999-1999", label: "999$ to 1999$", checked: true },
      { value: "1999-2999", label: "1999$ to 2999$", checked: false },
      { value: "2999-4999", label: "2999$ to 4999$", checked: false },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10%", checked: false },
      { value: "20", label: "20%", checked: false },
      { value: "30", label: "30%", checked: false },
      { value: "40", label: "40%", checked: false },
      { value: "50", label: "50%", checked: false },
      { value: "60", label: "60%", checked: false },
      { value: "70", label: "70%", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S", checked: false },
      { value: "M", label: "M", checked: false },
      { value: "L", label: "L", checked: false },
      // { value: "18l", label: "18L", checked: false },
      // { value: "20l", label: "20L", checked: false },
      // { value: "40l", label: "40L", checked: true },
    ],
  },
];
