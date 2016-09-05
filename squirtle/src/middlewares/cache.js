export const ReducerCache = (label, reducer) => store => next => action => {
  const result = next(action)

  if (!reducer[action.type]) return result;

  const state = store.getState().cart;
  localStorage.setItem(`cache_${label}`, JSON.stringify(state));

  return result;
}
