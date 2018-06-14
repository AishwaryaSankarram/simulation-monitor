
export default function(state = null, action) {

  switch(action.type) {
    case "LOGIN_SUCCESS":
      return action.payload.data;
    case "LOGIN_FAIL":
      console.log("LOGIN FAILED");
      return null;
  }

  return state;
}
