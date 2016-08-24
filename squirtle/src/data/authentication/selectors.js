export const GetCurrentUser = (state) => {
  console.log(state.authentication.userId);
  console.log(state.profiles[state.authentication.userId]);
  return state.authentication.userId
  && state.profiles[state.authentication.userId]
}
