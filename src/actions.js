export const GET_USERS_FETCH = "GET_USERS_FETCH";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

function getUsersFetch() {
  return {
    type: GET_USERS_FETCH
  };
}

export { getUsersFetch };
