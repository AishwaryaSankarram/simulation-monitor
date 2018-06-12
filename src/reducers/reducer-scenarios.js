export default function(state = [], action) {

  switch(action.type) {
    case "FETCH_ALL_SCENARIOS":
      
      return action.payload.data;
  }

  return state;
}
