export interface points {
  label: string;
  isDisplayable: boolean;
}

export interface SpclChe {
  id: number;
  title: string;
  img: string;
  price: string;
  points?: points[] | undefined;
}

export const spclche: SpclChe[] = [
  {
    id: 1,
    title: "SS Britner",
    img: "/PRODUCTS/SS_Britner.jpg",

    price: "₹2,000",
    points: [
      {
        label:
          "SS BRITNER is recommended to clean stainless steel equipments such as storage tanks, pipe lines, vessels, inter-mix, conveyor systems, dye & moulds etc.",
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
    title: "Hand Wash",
    img: "/PRODUCTS/Anti_microbial_Hand_wash.jpg",
    price: "₹2,000",

    points: [
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
    title: "De Greaser +",
    img: "/PRODUCTS/Degreaser+.jpg",
    price: "₹2,000",
    points: [
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
    title: "Formic Acid",
    img: "/PRODUCTS/Formic_acid.jpg",
    price: "₹2,000",
    points: [
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
    title: "Dish wash",
    img: "/PRODUCTS/Manual_dish_wash.jpg",
    price: "₹2,000",
    points: [
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
    title: "Floor Cleaner",
    img: "/PRODUCTS/Multi_purpose_floor_cleaner.jpg",
    price: "₹2,000",
    points: [
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
    title: "Sanitizer",
    img: "/PRODUCTS/Sanitizer.jpg",
    price: "₹2,000",

    points: [
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
    title: "Toilet Cleaner",
    img: "/PRODUCTS/Toilet_and_bowl_cleaner_disinfectant.jpg",
    price: "₹2,000",
    points: [
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
    title: "Glass Cleaner",
    img: "/PRODUCTS/Glass_Cleaner.jpg",
    price: "₹2,000",
    points: [
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
    title: "Room Freshner",
    img: "/PRODUCTS/Room_Freshner.jpg",
    price: "₹2,000",
    points: [
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
    title: "Vista +",
    img: "/PRODUCTS/VISTA+.jpg",
    price: "₹2,000",
    points: [
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
    title: "Laser",
    img: "/PRODUCTS/LASER.jpg",
    price: "₹2,000",
    points: [
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
    id: 13,
    title: "De Greaser",
    img: "/PRODUCTS/De_Greaser.jpg",
    price: "₹2,000",
    points: [
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

export interface MostBooked {
  id: number;
  title: string;
  img: string;
}

export const mostbooked: MostBooked[] = [
  {
    id: 1,
    title: "Preventive Maintenance",
    img: "/SERVICES/SRV_1.svg",
  },
  {
    id: 2,
    title: "Equipment Cleaning and Degreasing",
    img: "/SERVICES/SRV_2.svg",
  },
  {
    id: 3,
    title: "Corrosion Control and Rust Prevention",
    img: "/SERVICES/SRV_3.svg",
  },
  {
    id: 4,
    title: "Spill Response and Cleanup",
    img: "/SERVICES/SRV_4.svg",
  },
  {
    id: 5,
    title: "Industrial Waste Management",
    img: "/SERVICES/SRV_5.svg",
  },
  {
    id: 1,
    title: "Preventive Maintenance",
    img: "/SERVICES/SRV_1.svg",
  },
  {
    id: 2,
    title: "Equipment Cleaning and Degreasing",
    img: "/SERVICES/SRV_2.svg",
  },
  {
    id: 3,
    title: "Corrosion Control and Rust Prevention",
    img: "/SERVICES/SRV_3.svg",
  },
  {
    id: 4,
    title: "Spill Response and Cleanup",
    img: "/SERVICES/SRV_4.svg",
  },
  {
    id: 5,
    title: "Industrial Waste Management",
    img: "/SERVICES/SRV_5.svg",
  },
];
