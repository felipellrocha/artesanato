export const GetCurrentUser = (state) => {
  return state.authentication.userId
  && state.profiles[state.authentication.userId]
}
