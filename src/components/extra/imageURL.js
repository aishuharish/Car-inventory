//Access image file for each car

export const imageURL = (car) =>
  require(`../../data/images/${car.make}_${car.model}.png`).default;
