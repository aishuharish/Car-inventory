export const retailPrice = (car) => {
  const data =
    parseInt(car.basePrice) +
    parseInt(car.features.doors === 4 ? 2500.0 : 0.0) +
    parseInt(
      car.features.fuel === "Gas"
        ? 0.0
        : car.features.fuel === "Hybrid"
        ? 10000.0
        : 15000.0
    ) +
    parseInt(car.features.transmission === "Automatic" ? 1000.0 : 0.0) +
    parseInt(car.features.interior === "Cloth" ? 0.0 : 1500.0);

  return data;
};
