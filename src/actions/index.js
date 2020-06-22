export function setUser(payload) {
  return {
    type: "SET_USER",
    payload: payload,
  };
}

export function resetUser() {
  return {
    type: "RESET_USER",
  };
}
