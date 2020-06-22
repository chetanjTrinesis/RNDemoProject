const initial_State = {
  firstName: "TEST FIRSTNAME",
  lastName: "TEST LASTNAME",
};

export default function (state = initial_State, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        ...action.payload,
      };
    case "RESET_USER":
      return {
        ...initial_State,
      };
    default:
      return state;
  }
}
