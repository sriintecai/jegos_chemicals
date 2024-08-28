export interface servpoints {
  label: string;
  isDisplayable: boolean;
}

export interface Services {
  id: number;
  img: string;
  title: string;
  price: string;
  servpoints?: servpoints[] | undefined;
}

export const services: Services[] = [
  {
    id: 1,
    img: `/SERVS/1.svg`,
    title: "Corrosion Control and Rust Prevention",
    price: "₹2,000",
    servpoints: [
      {
        label: " Powerful solutions for removing grime, grease",
        isDisplayable: true,
      },
      {
        label:
          "Advanced chemicals to protect your machinery and infrastructure",
        isDisplayable: true,
      },
    ],
  },

  {
    id: 2,
    img: `/SERVS/2.svg`,
    title: "Corrosion Control and Rust Prevention",
    price: "₹2,000",
    servpoints: [
      {
        label: " Powerful solutions for removing grime, grease",
        isDisplayable: true,
      },
      {
        label:
          "Advanced chemicals to protect your machinery and infrastructure",
        isDisplayable: true,
      },
    ],
  },

  {
    id: 3,
    img: `/SERVS/3.svg`,
    title: "Corrosion Control and Rust Prevention",
    price: "₹2,000",
    servpoints: [
      {
        label: " Powerful solutions for removing grime, grease",
        isDisplayable: true,
      },
      {
        label:
          "Advanced chemicals to protect your machinery and infrastructure",
        isDisplayable: true,
      },
    ],
  },

  {
    id: 4,
    img: `/SERVS/4.svg`,
    title: "Corrosion Control and Rust Prevention",
    price: "₹2,000",
    servpoints: [
      {
        label: " Powerful solutions for removing grime, grease",
        isDisplayable: true,
      },
      {
        label:
          "Advanced chemicals to protect your machinery and infrastructure",
        isDisplayable: true,
      },
    ],
  },

  {
    id: 5,
    img: `/SERVS/5.svg`,
    title: "Corrosion Control and Rust Prevention",
    price: "₹2,000",
    servpoints: [
      {
        label: " Powerful solutions for removing grime, grease",
        isDisplayable: true,
      },
      {
        label:
          "Advanced chemicals to protect your machinery and infrastructure",
        isDisplayable: true,
      },
    ],
  },

  {
    id: 6,
    img: `/SERVS/6.svg`,
    title: "Corrosion Control and Rust Prevention",
    price: "₹2,000",
    servpoints: [
      {
        label: " Powerful solutions for removing grime, grease",
        isDisplayable: true,
      },
      {
        label:
          "Advanced chemicals to protect your machinery and infrastructure",
        isDisplayable: true,
      },
    ],
  },
  {
    id: 7,
    img: `/SERVS/1.svg`,
    title: "Corrosion Control and Rust Prevention",
    price: "₹2,000",
    servpoints: [
      {
        label: " Powerful solutions for removing grime, grease",
        isDisplayable: true,
      },
      {
        label:
          "Advanced chemicals to protect your machinery and infrastructure",
        isDisplayable: true,
      },
    ],
  },

  {
    id: 8,
    img: `/SERVS/2.svg`,
    title: "Corrosion Control and Rust Prevention",
    price: "₹2,000",
    servpoints: [
      {
        label: " Powerful solutions for removing grime, grease",
        isDisplayable: true,
      },
      {
        label:
          "Advanced chemicals to protect your machinery and infrastructure",
        isDisplayable: true,
      },
    ],
  },

  {
    id: 9,
    img: `/SERVS/3.svg`,
    title: "Corrosion Control and Rust Prevention",
    price: "₹2,000",
    servpoints: [
      {
        label: " Powerful solutions for removing grime, grease",
        isDisplayable: true,
      },
      {
        label:
          "Advanced chemicals to protect your machinery and infrastructure",
        isDisplayable: true,
      },
    ],
  },

  {
    id: 10,
    img: `/SERVS/4.svg`,
    title: "Corrosion Control and Rust Prevention",
    price: "₹2,000",
    servpoints: [
      {
        label: " Powerful solutions for removing grime, grease",
        isDisplayable: true,
      },
      {
        label:
          "Advanced chemicals to protect your machinery and infrastructure",
        isDisplayable: true,
      },
    ],
  },

  {
    id: 11,
    img: `/SERVS/5.svg`,
    title: "Corrosion Control and Rust Prevention",
    price: "₹2,000",
    servpoints: [
      {
        label: " Powerful solutions for removing grime, grease",
        isDisplayable: true,
      },
      {
        label:
          "Advanced chemicals to protect your machinery and infrastructure",
        isDisplayable: true,
      },
    ],
  },

  {
    id: 12,
    img: `/SERVS/6.svg`,
    title: "Corrosion Control and Rust Prevention",
    price: "₹2,000",
    servpoints: [
      {
        label: " Powerful solutions for removing grime, grease",
        isDisplayable: true,
      },
      {
        label:
          "Advanced chemicals to protect your machinery and infrastructure",
        isDisplayable: true,
      },
    ],
  },
];