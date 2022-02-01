import { GET_USERS_SUCCESS } from "./actions";

function myFirstReducer(state = { users: [] }, action) {
  if (action.type === GET_USERS_SUCCESS) {
    return { ...state, users: action.users };
  } else return state;
}

export default myFirstReducer;
