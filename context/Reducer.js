import { Actions } from "./Actions";

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.NOTIFY:
      return {
        ...state,
        notify: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
