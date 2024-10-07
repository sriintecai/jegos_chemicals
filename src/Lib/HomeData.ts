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
          "SS BRITNER is recommended to clean stainless steel equipments such as storage tanks.",
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
        label:
          "Anti-microbial Hand Cleaner cum Conditioner. Promotes healthy hands. Also available in gel form.",
        isDisplayable: true,
      },
      {
        label: "Removes dirt, oil, carbon and other impurities.",
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
        label:
          " De Greaser is used to clean epoxy floorings, vinyl floors, concrete floors etc.",
        isDisplayable: true,
      },
      {
        label:
          "Removes hard to clean contaminants such as oil, grease, dirt, carbon etc.",
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
        label:
          " Food and animal feed: As a preservative, flavor enhancer, and additive to improve the nutritional.",
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
        label:
          " Easy to clean and descale stainless steel vessels. Detergent based.",
        isDisplayable: true,
      },
      {
        label: "Dilutes freely with water, Harmless and biodegradable.",
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
        label:
          "Free from caustic and other hazardous ingredients, Less foaming liquid helps save water.",
        isDisplayable: true,
      },
      {
        label:
          "Used to clean floors such as granite, marble, glazed tiles etc.",
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
        label:
          "Reduces the risk of bacteria and virus transmission to other people",
        isDisplayable: true,
      },
      {
        label: "Helps minimise the impact of illness and absenteeism",
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
        label:
          "Quickly removes water contaminants, stains, dirt, lime build-up.",
        isDisplayable: true,
      },
      {
        label:
          "Versatile, con be used to dean wash basin, urinals, commodes and bathroom Controls foul smell.",
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
        label: "Free from ammonia and other harmful ingredients, Non-Soapy.",
        isDisplayable: true,
      },
      {
        label:
          "Recommended to dean gloss, computer cabinet, TV panel, fridge, Washing m/c etc",
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
        label:
          "Masking unpleasant odors: Room fresheners can mask or remove bad smells",
        isDisplayable: true,
      },
      {
        label:
          "Creating a pleasant ambiance: Room fresheners can create a welcoming atmosphere.",
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
        label:
          "Quickly removes water contaminants, dirt and other hard to clean substances.",
        isDisplayable: true,
      },
      {
        label: "Versatile, can also be used to clean urinals and commodes.",
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
        label:
          " De Greaser is used to clean epoxy floorings, vinyl floors, concrete floors etc.",
        isDisplayable: true,
      },
      {
        label:
          "Removes hard to clean contaminants such as oil, grease, dirt, carbon etc.",
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
