
export default function(state = null, action) {

  switch(action.type) {
    case "LOGIN_STATUS":
      let obj = {...action.payload.data};
      obj.pwd = action.pwd;
      return obj;
  }

  return state;
}
