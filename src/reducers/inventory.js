export const inventory = (state = [], action) => {
  switch (action.type) {
    case "FETCH_INVENTORY":
      return action.payload;
    default:
      return state;
  }
};
