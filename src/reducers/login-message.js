export default function(state = false, action) {

  switch(action.type) {
    case "LOGIN_FAIL":
      return true;
    case "LOGIN_SUCCESS":
      return false;
  }

  return state;
}
