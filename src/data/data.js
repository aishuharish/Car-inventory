//default data for car inventory management system

import { v4 as uuidv4 } from "uuid";

export const data = [
  {
    id: uuidv4(),
    type: "Car",
    make: "Ford",
    model: "Focus",
    basePrice: "16500.00",
    features: {
      doors: 2,
      fuel: "Gas",
      transmission: "Manual",
      interior: "Leather",
    },
  },
  {
    id: uuidv4(),
    type: "Car",
    make: "Ford",
    model: "Fusion",
    basePrice: "22000.00",
    features: {
      doors: 4,
      fuel: "Hybrid",
      transmission: "Automatic",
      interior: "Leather",
    },
  },
  {
    id: uuidv4(),
    type: "Truck",
    make: "Ford",
    model: "F-150",
    basePrice: "24500.00",
    features: {
      doors: 4,
      fuel: "Gas",
      transmission: "Automatic",
      interior: "Cloth",
    },
  },
  {
    id: uuidv4(),
    type: "Car",
    make: "Lincoln",
    model: "MKZ",
    basePrice: "34500.00",
    features: {
      doors: 2,
      fuel: "Electric",
      transmission: "Automatic",
      interior: "Leather",
    },
  },
  {
    id: uuidv4(),
    type: "SUV",
    make: "Lincoln",
    model: "Navigator",
    basePrice: "56000.00",
    features: {
      doors: 4,
      fuel: "Gas",
      transmission: "Automatic",
      interior: "Leather",
    },
  },
  {
    id: uuidv4(),
    type: "Car",
    make: "Dodge",
    model: "Avenger",
    basePrice: "20500.00",
    features: {
      doors: 4,
      fuel: "Electric",
      transmission: "Automatic",
      interior: "Cloth",
    },
  },
  {
    id: uuidv4(),
    type: "Car",
    make: "Dodge",
    model: "Dart",
    basePrice: "16000.00",
    features: {
      doors: 2,
      fuel: "Gas",
      transmission: "Manual",
      interior: "Leather",
    },
  },
  {
    id: uuidv4(),
    type: "SUV",
    make: "Dodge",
    model: "Durango",
    basePrice: "29500.00",
    features: {
      doors: 4,
      fuel: "Hybrid",
      transmission: "Automatic",
      interior: "Leather",
    },
  },
];
